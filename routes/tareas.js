const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
const { check, validationResult } = require('express-validator');

const controller = require('../controllers/tareas');

router.get('/tareas', controller.index);

router.post('/tareas', [
  check('tarea')
    .notEmpty()
    .withMessage('Debe ingresar un texto')
    .isLength(10)
    .withMessage('La tarea al menos debe tener 10 caracteres')
    .escape()
    .trim(),
], controller.create);

router.get('/tareas/:id/edit', controller.edit);

router.put('/tareas/update', controller.update);

router.delete('/tareas/:id/delete', controller.delete);

module.exports = router;
