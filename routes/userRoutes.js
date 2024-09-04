const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController'); // Controlador para autenticación

// Rutas de Usuario
router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getUsers);
router.get('/api/users/:id', userController.getUserById);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

// Rutas de Autenticación
router.post('/api/login', authController.login); // Ruta para iniciar sesión
router.post('/api/signup', authController.signup); // Ruta para registrarse

module.exports = router;
