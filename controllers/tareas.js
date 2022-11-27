// eslint-disable-next-line no-unused-vars
const { check, body, validationResult } = require('express-validator');

const connection = require('../db');

module.exports.index = (req, res) => {
  res.render('tareas/index', { values: {} });
};

module.exports.edit = (req, res) => {
  connection.query(
    'select * from tareas where id = ?',
    [req.params.id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.render('tareas/edit', { tareas: results[0] });
    },
  );
};

module.exports.update = (req, res) => {
  connection.query(
    'update tareas set ? where id = ?',
    [{ nombre_tarea: req.body.tarea }, req.body.id],
    (error) => {
      if (error) {
        throw error;
      }

      res.redirect('/');
    },
  );
};

module.exports.delete = (req, res) => {
  connection.query(
    'delete from tareas where id = ?',
    [req.params.id],
    (error) => {
      if (error) {
        throw error;
      }

      res.redirect('/');
    },
  );
};

module.exports.create = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    connection.query(
      'insert into tareas set ?',
      {
        nombre_tarea: req.body.tarea,
      },
      (error) => {
        if (error) {
          throw error;
        }
      },
    );

    res.redirect('/');
  } else {
    res.render('tareas/index', { values: req.body, errors: errors.array() });
  }
};
