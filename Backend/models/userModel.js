const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  teams: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Team',
    required: true
  },
  ranking: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);