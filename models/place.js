// jshint node: true
'use strict';

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  country: {
    type: String,
  }
  }, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

placeSchema.virtual('isNorthernHermisphere?').get(function() {
  if (this.latitude > 0) {
    return true;
  }
  return false;
});
placeSchema.virtual('isWesternHermisphere?').get(function() {
  if (this.longitude < 0) {
    return true;
  }
  return false;
});
// model
const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
