const mongoose = require('mongoose');

const planeSchema = mongoose.Schema({
    registration: {type: String, required: true, unique: true},
    maxTaxiWeight:{type: Number, required: true},
    maxTakeoffWeight: {type: Number, required: true},
    maxLandingWeight: {type: Number, required: true},
    maxZerofuelWeight: {type: Number, required: true},
    operationalEmptyWeight: {type: Number, required: true},
    centerOfGravity: {type: Number, required: true},
    ui: {type: Number, required: true} 
});

