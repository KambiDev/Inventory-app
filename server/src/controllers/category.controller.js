import CategoryModel from "../models/category.model.js";

class CategoryController {
  static async getAll(req, res, next) {
    try {
      const categories = await CategoryModel.getAll();
      return res
        .status(200)
        .json({ message: "categorias obtenidas exitosamente.", categories });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await CategoryModel.getById(id);

      if (!category) {
        return res.status(404).json({ message: "Categoria no encontrada" });
      }

      return res
        .status(200)
        .json({ message: "Categoria obtenida exitosamente.", category });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { name, description } = req.body;
      const result = await CategoryModel.create({ name, description });
      return res
        .status(201)
        .json({ message: "Categoria creada exitosamente.", result });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const result = await CategoryModel.update({ name, description, id });

      if (!result) {
        return res.status(404).json({ message: "Categoria no encontrada" });
      }

      return res
        .status(200)
        .json({ message: "Categoria actualizada exitosamente." });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await CategoryModel.delete(id);

      if (!result) {
        return res.status(404).json({ message: "Categoria no encontrada" });
      }

      return res
        .status(200)
        .json({ message: "Categoria eliminada exitosamente." });
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
