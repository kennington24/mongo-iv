const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Planet = require('../planets/Planet');
const Film = require('../films/Film');
const Vehicle = require('../vehicles/Vehicle');

const Character = mongoose.Schema({
  name: { type: String, required: true },
  edited: Date,
  created: Date,
  gender: String,
  height: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  key: { type: Number, unique: true },
  homeworld_key: Number,
  // add homeworld field that links the character to it's planet
  homeworld: [{ type: ObjectId, ref: 'Planet' }],
  movies: [{ type: ObjectId, ref: 'Film' }],
  vehicles: [{ type: ObjectId, ref: 'Vehicle' }]
});

module.exports = mongoose.model('Character', Character);
