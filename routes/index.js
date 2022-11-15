const express = require('express');
const router = express.Router();

const connection = require('../db');

router.get('/',(req,res) => {
    connection.query('select * from tareas', (error,results) => {
        if (error) {throw error}

        res.render('index', {tareas: results})

    })

} );





module.exports = router;