const { successRes, errorRes } = require("../helpers/responses");
const CategoryModel = require("../models/CategoryModel");

class CategoryController {
  static async createCategory(req, res, next) {
    try {
      await CategoryModel.createCategory(req.body.name);
      return successRes(res, 201, "Category created successfully");
    } catch (error) {
      next(error);
    }
  }

  static async getAllCategories(req, res, next) {
    try {
      const categories = await CategoryModel.getAllCategories();
      return successRes(res, 200, "Show All Data Category", categories);
    } catch (error) {
      next(error);
    }
  }

  static async getCategoryById(req, res, next) {
    try {
      const category = await CategoryModel.getCategoryById(req.params.id);
      if (!category) return errorRes(res, 404, "Category not found");
      return successRes(res, 200, "Show All Data Category", category);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      await CategoryModel.deleteCategory(req.params.id);
      return successRes(res, 200, "Category deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
