'use strict';

const mongoose = require('mongoose');

const planeSchema = mongoose.Schema({
    registration: {type: String, required: true, unique: true},
    maxTaxiWeight:{type: Number, required: true},
    maxTakeoffWeight: {type: Number, required: true},
    maxLandingWeight: {type: Number, required: true},
    maxZerofuelWeight: {type: Number, required: true},
    operationalEmptyWeight: {type: Number, required: true},
    originalCenterOfGravity: {type: Number, required: true},
    ui: {type: Number, required: true} 
});

//add serialize method to only show what you want to user
// blocks them from accesing other variable
planeSchema.methods.serialize = function() {
    return {
    registration: this.registration,
    maxTaxiWeight: this.maxTaxiWeight,
    maxTakeoffWeigh: this.maxTakeoffWeight,
    maxLandingWeight: this.maxLandingWeight,
    maxZerofuelWeight: this.maxZerofuelWeight,
    operationalEmptyWeight: this.operationalEmptyWeight,
    originalCenterOfGravity:this.centerOfGravity,
    ui: this.ui
    };
  }

const Plane = mongoose.model('Plane', planeSchema);

module.exports = {Plane};