const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require('../middlewares/usersMulterMiddleware');
const path = require('path');
const { productEdit } = require("../controllers/usersController");
const validations = require('../middlewares/registerValidation');
const loginValidations = require('../middlewares/loginValidation');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const editPasswordValidation = require('../middlewares/editPasswordValidation')

router.get('/login', guestMiddleware, usersController.login)
router.post('/log', loginValidations,  usersController.loginProcess)
router.get('/register', guestMiddleware, usersController.register)
router.post('/register', upload.any(),validations, usersController.storeUser)
router.get('/profile', authMiddleware, usersController.profile)
router.get('/logout', usersController.logout)

router.get('/edit/', usersController.edit)
router.put('/edit/:id/', usersController.storeEdition) 

router.get('/edit/password', usersController.editPassword)
router.put('/edit/password/:id', editPasswordValidation, usersController.newPasswordProcess)

// router.delete('/delete/:id', usersController.destroy); 



module.exports = router;