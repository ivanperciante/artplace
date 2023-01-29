const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");
const productRegisterValidation = require('../middlewares/productRegisterValidation')
const multer = require('multer')
const path = require('path');
const { productEdit } = require("../controllers/productsController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })



router.get('/', productController.productsList)
router.get('/create', productController.productRegister)
router.post('/create',productRegisterValidation, upload.any(), productController.productCreate)
router.get('/promotions', productController.promotions)
router.get('/edit/:id/', productController.edit)
router.put('/edit/:id/', upload.any(), productController.productEdit) 
router.get('/:id/', productController.productDetail)
router.delete('/delete/:id/', productController.destroy); 
router.post('/search', productController.search)



module.exports = router;