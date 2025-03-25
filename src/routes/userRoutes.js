const express = require("express");
const UserController = require("../controllers/UserController");
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

const userRoute = express.Router();

userRoute.get("/", authMiddleware, adminMiddleware, UserController.getAllUsers);
userRoute.get("/:id", authMiddleware, adminMiddleware, UserController.getUserById);
userRoute.delete("/:id", authMiddleware, adminMiddleware, UserController.deleteUser);

module.exports = userRoute;
