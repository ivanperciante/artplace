const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../src/database/models');
const bcrypt = require("bcryptjs");
const session = require('express-session');
const { log } = require('console');

const Users = db.User;

const usersController = {

    login: (req, res) => {
        res.render("logIn")
    },

    loginProcess: (req, res) => {

         // 1. busca el usuario //
        let userToLogin = Users.findOne({
            where:{
                email: req.body.email
            }
         // 2. hace todo el proceso de login //
        }).then((user)=>{
            if(user === null){
                let errors =  {
                    email: {
                        msg: "El correo ingresado es incorrecto"
                    }
                }

                return res.render("login", {errors:errors})
            }
                
           
            userToLogin=user.dataValues

            let check = bcrypt.compareSync(req.body.password, userToLogin.password)

            if(check){

                delete userToLogin.password

                // Aqui se está creando la cookie con la información del usuario. Dura 2 min //
                if(req.body.recuerdame != undefined){
                    res.cookie('recuerdame',userToLogin.id,{ maxAge: 60000*2})
                }

                req.session.userLogged = userToLogin
                res.locals.user = req.session.userLogged
                return res.redirect("profile")
                
            }else{

                let errors =  {
                    email: {
                        msg: "Las credenciales son inválidas"
                    },
                    password: {
                        msg: "Las credenciales son inválidas"
                        }
                }

                return res.render("login", {errors:errors})
            }

        })
        
    },

    register: (req,res)=>{
        res.render('signUp')
    },
    storeUser: (req,res)=>{


        // 1. Validaciones de formulario de registro //
        const validations = validationResult(req);
        
        let oldData = {...req.body}

        if(validations.errors.length > 0){
            return res.render('signUp' ,{
                errors:validations.mapped(),
                old:oldData
            })
        }

        // 2. Ejecución del registro //

        let userData =  req.body;
        let file = req.files; 
        let encryptedPass = bcrypt.hashSync(userData.password, 10);
        let image
        

        if(file.length>0){
            image = file[0].filename
        }
        else{
            image = "dafaultProfile.png"
        }

        let newUser={
            ...userData,
            password: encryptedPass,
            profileImage: image,
            admin: 0,
            countryId:1
        }

        Users.create(newUser)

        // 3. redirección una vez queda guardado en DB //
        .then((user)=>{
            delete newUser.password
            req.session.userLogged = newUser
        })
        .then((user)=>{res.redirect('profile')})
        .then((user)=>{})
    },

    profile: (req,res)=>{
        res.render('profile', {user: req.session.userLogged})
    },
    edit: (req,res)=>{
        res.render('profileEdit', {user: req.session.userLogged})
    },
    storeEdition: (req,res)=>{

       // 1. busca al usuario que esta logeado // 
        let userId = req.params.id
        // 2. lo actualiza según lo que viene en el formulario // 
        Users.update({
          ...req.body
        },
        {
            where:{id:userId}
        })
        // 3. cierra la sesión // 
        .then(()=>{
            req.session.destroy();
            return res.redirect('/');
        })
    },
    editPassword: (req,res)=>{
        res.render('editpassword', {user: req.session.userLogged})
    },
    newPasswordProcess: (req,res)=>{
       
        const validations = validationResult(req);

        // Encuentra el id que viene en el parametro de la URL
        let userId = req.params.id
        // Busca al usuario y lo almacena en una variable
        Users.findByPk(userId)
        .then((user)=>{

            let userToEdit = user.dataValues

            let check = bcrypt.compareSync(req.body.password, userToEdit.password)
    
            if(check === true){

                // Valida que la contraseña tenga al menos 6 caractères, esta
                // en este momento, ya que primero hay que validar que la pass
                //  sea correcta.
                if(validations.errors.length > 0){
                    return res.render('editpassword' ,{
                        errors:validations.mapped(),
                    })
                }

    
                Users.update({
                    password: bcrypt.hashSync(req.body.newPassword, 10)
                  },
                  {
                      where:{id:userId}
                  })

                return res.redirect('/')
            }
            else{

                let errors = {password: {
                    msg: "Las credenciales son inválidas"
                }}
                return res.render('editpassword',{errors:errors, user: req.session.userLogged})
            }

        })    



    },
    logout: (req,res)=>{

        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = usersController;