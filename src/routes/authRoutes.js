const express = require("express");
const AuthController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const authRoute = express.Router();

authRoute.post("/register", AuthController.register);
authRoute.post("/login", AuthController.login);
authRoute.get("/profile", authMiddleware, AuthController.profile);
authRoute.put("/profile", authMiddleware, AuthController.updateProfile);

module.exports = authRoute;
