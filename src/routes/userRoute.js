const express = require('express');
const UserController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/create', UserController.createUser);
userRoute.post('/login', UserController.login);

module.exports = userRoute;
