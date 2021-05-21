require('dotenv').config()
require('colors');
const path = require('path');
const express = require("express");

const cors = require('cors');
const connectDB = require('./dbinit');
const locations = require('./api/locations');
const restaurants = require('./api/restaurants');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 1000;

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/restaurants', restaurants);
app.use('/locations', locations)
app.use(errorHandler);


app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

