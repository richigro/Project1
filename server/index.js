'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');
const {Plane} = require('./modles');

app.get('/', (req, res) => {
    res.send('Its alive');
});


const PORT = 3000;
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}`);
});