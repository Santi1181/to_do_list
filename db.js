const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // 127.0.0.1
  user: 'root',
  password: '',
  database: 'lista_tareas',
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
});

// connection.query('select * from tareas', (error,results) => {
//     if (error) {throw error}

//     console.log(results);
// });

module.exports = connection;
