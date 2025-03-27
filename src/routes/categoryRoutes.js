const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const { auth, admin } = require("../middlewares/auth");

const categoryRoute = express.Router();

categoryRoute.post("/", auth, admin, CategoryController.createCategory);
categoryRoute.get("/", CategoryController.getAllCategories);
categoryRoute.get("/:id", CategoryController.getCategoryById);
categoryRoute.delete("/:id", auth, admin, CategoryController.deleteCategory);

module.exports = categoryRoute;
