const path = require ('path')
const db = require('../src/database/models');

const Products = db.Product;

const mainController = {
    index: (req, res) => {
        Products.findAll()
        .then(products=>(res.render("index", {products})))
    },

    cart: (req, res) => {
        res.render("shoppingCart")
    }
}

module.exports = mainController