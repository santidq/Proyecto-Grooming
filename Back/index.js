const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./database/db');

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/encuesta.routes'));


app.listen(3000, ()=>console.log('Servidor en funcionamiento'));