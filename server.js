require('dotenv').config()
require('colors');
const express = require("express");

const cors = require('cors');
const connectDB = require('./dbinit');
const users = require('./api/users');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

if (process.env.NODE_ENV === 'dev') {
  app.use(cors());
}

app.use(express.json());
app.use('/users', users);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

