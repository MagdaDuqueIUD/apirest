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
    check('descripcion')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar una descripción.'), 
    check('slogan')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar un slogan.'),        
    
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
console.log('valida productora');

module.exports = { validateCreate }