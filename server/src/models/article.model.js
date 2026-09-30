import pool from "../config/db.js";

class ArticleModel {
  static async getAll() {}
  static async getById(article_id) {}
  static async create({ category_id, name, description, price, stock }) {}
  static async update({
    category_id,
    article_id,
    name,
    description,
    price,
    stock,
  }) {}
  static async delete(article_id) {}
}

export default ArticleModel;
