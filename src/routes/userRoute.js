const express = require('express');
const UserController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/create', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.post('/profile', UserController.getProfile);

module.exports = userRoute;
