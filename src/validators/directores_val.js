const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
    check('nombre')
    .exists().withMessage('El campo nombre es obligatorio')
    .not()
    .isEmpty().withMessage('El campo nombre es obligatorio.'),
    check('estado')
    .exists()
    .not()
    .isEmpty()
    .isIn('Activo','Inactivo').withMessage('Debe ingresar Activo o Inactivo.'),  
    
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
console.log('valida director');

module.exports = { validateCreate }