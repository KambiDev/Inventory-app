import pool from "../config/db.js";

class CategoryModel {
  static async getAll() {
    const [rows] = await pool.execute(
      "SELECT name, description FROM categories;",
    );
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.execute(
      "SELECT name, description FROM categories WHERE id = ?;",
      [id],
    );
    return rows[0] ?? null;
  }

  static async create({ name, description }) {
    const [result] = await pool.execute(
      "INSERT INTO categories (name, description) VALUES (?, ?);",
      [name, description],
    );
    return {
      id: result.insertId,
      name,
      description,
    };
  }

  static async update({ name, description, id }) {
    const [result] = await pool.execute(
      "UPDATE categories SET name = ?, description = ? WHERE id = ?;",
      [name, description, id],
    );
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await pool.execute(
      "DELETE FROM categories WHERE id = ?;",
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default CategoryModel;
