const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  credits: { type: Number, default: 0 },
  role: { type: String, default: 'user' }, // admin/user
});

module.exports = mongoose.model('User', userSchema);
