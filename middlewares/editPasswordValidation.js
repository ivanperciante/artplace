const { check } =require ('express-validator');
// Validaciones básicas, no valida las imágenes //
const errors =[
    check('newPassword')
    .notEmpty().withMessage('Ingresa una contraseña').bail()
    .isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caractéres')
]

module.exports = errors;