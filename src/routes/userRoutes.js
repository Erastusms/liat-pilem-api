const express = require("express");
const UserController = require("../controllers/UserController");
const { auth, admin } = require("../middlewares/auth");

const userRoute = express.Router();

userRoute.get("/", auth, admin, UserController.getAllUsers);
userRoute.get("/:id", auth, admin, UserController.getUserById);
userRoute.delete("/:id", auth, admin, UserController.deleteUser);

module.exports = userRoute;
