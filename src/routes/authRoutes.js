const express = require("express");
const AuthController = require("../controllers/AuthController");
const authMiddleware = require("../middlewares/authMiddleware");
const authRoute = express.Router();

authRoute.post("/register", AuthController.register);
authRoute.post("/login", AuthController.login);
authRoute.post("/logout", AuthController.logout);
authRoute.get("/profile", authMiddleware, AuthController.profile);
authRoute.put("/profile", authMiddleware, AuthController.updateProfile);

module.exports = authRoute;
