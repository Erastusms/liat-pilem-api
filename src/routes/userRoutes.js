const express = require("express");
const UserController = require("../controllers/UserController");
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

const userRoute = express.Router();

userRoute.get("/users", authMiddleware, adminMiddleware, UserController.getAllUsers);
userRoute.get("/users/:id", authMiddleware, adminMiddleware, UserController.getUserById);
userRoute.delete("/users/:id", authMiddleware, adminMiddleware, UserController.deleteUser);

module.exports = router;
