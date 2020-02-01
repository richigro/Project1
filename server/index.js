'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const {PORT, DATABASE_URL, CLIENT_ORIGIN} = require('./config');
const {Plane} = require('./models/plane');

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors({
  origin: CLIENT_ORIGIN
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Its alive');
});
app.get('/api/planes', (req, res) => {
    Plane
    .find()
    .then(plane => res.json({
        plane
    }))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    });
});


// add a new airplane to db
app.post('/api/planes', jsonParser, (req, res) => {
  // console.log(req.body.registration);
  Plane
  .create({
    registration: req.body.registration,
    maxTaxiWeight: req.body.maxTaxiWeight,
    maxTakeoffWeight: req.body.maxTakeoffWeight,
    maxLandingWeight: req.body.maxLandingWeight,
    maxZerofuelWeight: req.body.maxZerofuelWeight,
    operationalEmptyWeight: req.body.operationalEmptyWeight,
    originalCenterOfGravity: req.body.originalCenterOfGravity,
    ui: req.body.ui
  })
  .then(plane => res.json({
    plane
  }))
  .catch(err => {
    console.log(err);
    res.status(500).json({message: 'Something went wrong'});
  });
});

// app.put('api');

app.delete('/api/planes/:id', jsonParser, (req, res) => {
  console.log(`Deleting airplane with id ${req.params.id}`);
  Plane
  .findByIdAndRemove(req.params.id)
  .then(() => res.status(204).end())
  .catch(err => res.status(500).json({message: "Unable to delete aiplane"}));
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})