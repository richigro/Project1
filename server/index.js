'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const {PORT, DATABASE_URL} = require('./config');
const {Plane} = require('./models/plane');

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(express.static("../client/public"));

app.get('/', (req, res) => {
    res.send('Its alive');
});
app.get('/api/planes', (req, res) => {
    Plane
    .find()
    .then(plane => res.json({
        airplanes: plane
    }))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})