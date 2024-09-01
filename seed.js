const mongoose = require('mongoose');
const User = require('./models/userModel');
require('dotenv').config();

const usuariosDePrueba = [
  {
    name: "Juan Perez",
    email: "juan.perez@example.com",
    password: "password123"
  },
  {
    name: "Maria Lopez",
    email: "maria.lopez@example.com",
    password: "password123"
  },
  {
    name: "Carlos Gomez",
    email: "carlos.gomez@example.com",
    password: "password123"
  },
  {
    name: "Laura Martinez",
    email: "laura.martinez@example.com",
    password: "password123"
  },
  {
    name: "Ana Rodriguez",
    email: "ana.rodriguez@example.com",
    password: "password123"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB exitosamente');
    
    try {
      await User.deleteMany({});
      await User.insertMany(usuariosDePrueba);
      console.log('Usuarios insertados exitosamente');
    } catch (error) {
      console.error('Error insertando usuarios:', error);
    } finally {
      mongoose.disconnect();
    }
  })
  .catch(error => console.error('Error conectando a MongoDB:', error));
