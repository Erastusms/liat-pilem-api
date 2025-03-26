const pool = require("../config/db");

class CategoryModel {
  static async createCategory(name) {
    const { rows } = await pool.query(
      "INSERT INTO categories (name) VALUES ($1) RETURNING *",
      [name]
    );
    return rows[0];
  }

  static async getAllCategories() {
    const { rows } = await pool.query(
      "SELECT * FROM categories ORDER BY name ASC"
    );
    return rows;
  }

  static async getCategoryById(categoryId) {
    const { rows } = await pool.query(
      "SELECT * FROM categories WHERE category_id = $1",
      [categoryId]
    );
    return rows[0];
  }

  static async deleteCategory(categoryId) {
    await pool.query("DELETE FROM categories WHERE category_id = $1", [
      categoryId,
    ]);
  }
}

module.exports = CategoryModel;
