const { check } =require ('express-validator');
// Validaciones básicas, no valida las imágenes //
const errors =[
    check('email')
        .notEmpty().withMessage('Tienes que ingresar tu correo electrónico'),
    check('password')
        .notEmpty().withMessage('Ingresa tu contraseña')
]

module.exports = errors;