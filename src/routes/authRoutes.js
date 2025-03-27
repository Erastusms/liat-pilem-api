const express = require("express");
const AuthController = require("../controllers/AuthController");
const { auth } = require("../middlewares/auth");
const authRoute = express.Router();

authRoute.post("/register", AuthController.register);
authRoute.post("/login", AuthController.login);
authRoute.post("/logout", AuthController.logout);
authRoute.post("/refresh-token", AuthController.refreshToken);
authRoute.get("/profile", auth, AuthController.profile);
authRoute.put("/profile", auth, AuthController.updateProfile);

module.exports = authRoute;
