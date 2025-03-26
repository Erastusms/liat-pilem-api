const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

const categoryRoute = express.Router();

categoryRoute.post("/", authMiddleware, adminMiddleware, CategoryController.createCategory);
categoryRoute.get("/", CategoryController.getAllCategories);
categoryRoute.get("/:id", CategoryController.getCategoryById);
categoryRoute.delete("/:id", authMiddleware, adminMiddleware, CategoryController.deleteCategory);

module.exports = categoryRoute;
