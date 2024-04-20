const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

console.log('ingresa a valida producción');

const validateCreate = [
     check('titulo')
    .exists().withMessage('El campo título es obligatorio.')
    .not()
    .isEmpty().withMessage('El campo título es obligatorio.'),
   check('sinopsis')
    .exists()
    .not()
    .isEmpty().withMessage('El campo sinopsis es obligatorio.'),
    check('url')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar una url.'),   

    check('estreno')
    .exists()
    .isNumeric()
    .not()
    .isEmpty().withMessage('Debe ingresar un año de estreno.'), 
  
    check('genero')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar un id género.'), 

    check('director')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar un id director.'),     

    check('productora')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar un id productora.'),      

    check('tipo')
    .exists()
    .not()
    .isEmpty().withMessage('Debe ingresar un id tipo.'),       
 
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
console.log('valida producción  ');

module.exports = { validateCreate }