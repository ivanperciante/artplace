const { check } =require ('express-validator');
// Validaciones básicas, no valida las imágenes //
const errors =[
    check('productName')
    .notEmpty().withMessage('Tienes que ingresar un nombre de producto').bail()
    .isLength({min:5}).withMessage('El nombre del producto debe ser de al menos cinco caracteres')
    ,
    check('description')
    .isLength({min:20}).withMessage('El nombre del producto debe ser de al menos cinco caracteres'),
]

module.exports = errors;