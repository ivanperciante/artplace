const path = require ('path');
const { Sequelize, sequelize } = require('../src/database/models');
const db = require('../src/database/models');

const Products = db.Product;
const Users = db.User
const Categories = db.Category;

const apiController = {

    list:(req, res) => {
        Products.findAll()
        .then(products=>(
            res.status(200).json({
                count: products.length,
                status: 200,
                data: products
            })))
    },

    products:(req, res) => {

        async function asignacion () {
            let prueba1= await Products.count({
                attributes: ["categoryId"],
                group: "categoryId" })
            let prueba2 = await Products.findAll({})

            totalProducts = prueba2

            countByCategory=prueba1
            let newData = await sequelize.query(`SELECT products.id, products.productName, products.price, products.img1, products.sizes, products.creatorName, products.stock, categories.name  FROM products
            INNER JOIN categories ON products.categoryId = categories.id`) 
            console.log(newData);
            dataProducts=newData
        }

        asignacion()
        .then(()=>{res.status(200).json({
            status: 200,
            count: totalProducts.length,
            countByCategory:countByCategory,
            data: dataProducts
        })})

    },

    product:(req, res) => {
        let productId = req.params.id;

        Products.findByPk(productId)
        .then((productId)=>{
            res.status(200).json({
            status: 200,
            data: productId
        })})
    },

    users: (req, res) => {
        Users.findAll()
        .then(users => {
            let apiResponse = users.map(user => {
                return {
                    email: user.dataValues.email,
                    fullName: user.dataValues.fullName,
                    id: user.dataValues.id,
                    detail: `/users/profile/${user.dataValues.id}`
                }
            })
            res.status(200).json({
                count: users.length,
                data: apiResponse
            })
        })
    },

    usersDetail: (req, res) => {
        Users.findByPk(req.params.id)
        .then(user => {
            delete user.dataValues.password
            delete user.dataValues.adress
            delete user.dataValues.phone
            delete user.dataValues.admin
            user.dataValues.profileImage = `http://localhost:8000/images/users/${user.dataValues.profileImage}`
            res.status(200).json({
                data: user 
            })
        })
    },
    categories: (req,res)=>{
        Categories.findAll()
        .then(cat=>{
            res.status(200).json({
                data:cat
            })
        })
    }

}

module.exports = apiController