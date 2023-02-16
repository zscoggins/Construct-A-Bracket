const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  result: {
    type: String,
    enum: ['W', 'L', 'TBD'],
    default: 'TBD'
  }
});

module.exports = mongoose.model('Team', teamSchema);