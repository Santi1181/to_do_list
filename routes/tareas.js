const express = require('express');
const router = express.Router();


const connection = require('../db');
const controller = require('../controllers/tareas');

const { check ,body, validationResult } = require('express-validator');

router.get('/tareas', controller.index);


router.post('/tareas', [
    check('tarea')
    .notEmpty()
    .withMessage('Debe ingresar un texto')
    .isLength(10)
    .withMessage('La tarea al menos debe tener 10 caracteres')
    .escape()
    .trim(),
] , (req,res) => {
    const errors = validationResult(req);
    console.log(req.body, errors);

    if (errors.isEmpty()) {
        connection.query('insert into tareas set ?', {
            nombre_tarea: req.body.tarea
        }, (error,results) => {
            if (error) {throw error}
        })
        
        res.redirect('/');
    } else {
        res.render('tareas/index' , {values: req.body,errors: errors.array()})
    }
});


router.get('/tareas/:id/edit',controller.edit);
router.put('/tareas/update',controller.update);
router.delete('/tareas/:id/delete',controller.delete);


module.exports = router;