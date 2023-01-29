//esta es la función de la cookie que recuerda al usuario //
const db = require('../src/database/models');
const Users = db.User;

function cookieRecuerdame(req, res, next){
    
    if(req.cookies.recuerdame != undefined && req.session.userLogged == undefined ){

        let userId = req.params.id
        Users.findByPk(userId)
        .then((user)=>{
            let userToLogin = user
            req.session.userLogged = userToLogin
        })
    }

    next()
    
}

module.exports=cookieRecuerdame;