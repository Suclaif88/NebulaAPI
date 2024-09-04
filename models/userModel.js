const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
