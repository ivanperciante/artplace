const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const productController = require("../controllers/productsController");

router.get("/", mainController.index);
router.get("/cart", mainController.cart);


module.exports = router
