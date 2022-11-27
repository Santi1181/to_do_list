const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

app.set('view engine', 'ejs'); // vistas
app.use(expressLayouts); // envuelve vistas

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(require('./routes/index'));
app.use(require('./routes/tareas'));

const port = 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`http://localhost:${port}`));
