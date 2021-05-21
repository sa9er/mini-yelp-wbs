require('dotenv').config()
require('colors');
const express = require("express");

const cors = require('cors');
const connectDB = require('./dbinit');
const restaurants = require('./api/restaurants');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

if (process.env.NODE_ENV === 'dev') {
  app.use(cors());
}


app.use(express.json());
app.get('/', (req, res) => res.send('hello'));
app.use('/restaurants', restaurants);
app.use(errorHandler);


app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

