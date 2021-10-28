const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name: { type: String, required: true, unique: true},
  baseI: { type: String, required: true},
  attack: { type: String, required: true},
  heavyAttack: {type: String, required: true},
  SpecialAttack: {type: String, required: true}
}, {
  timestamps: true
})

module.exports = model('Character', characterSchema)
