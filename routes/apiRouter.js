const express = require("express");
const router = express.Router();
const path = require('path');
const apiController = require('../controllers/apiController')

router.get('/list', apiController.list)
router.get('/products', apiController.products)
router.get('/product/:id', apiController.product)
router.get('/users', apiController.users)
router.get('/users/:id', apiController.usersDetail)
router.get('/categories', apiController.categories)


module.exports = router;