import { Router } from "express";
import CategoryController from "../controllers/category.controller.js";
import { requireRole, verifyToken } from "../middlewares/auth.js";
import { categoryValidate } from "../validators/category.validate.js";

const categoryRouter = Router();

// rutas publicas
categoryRouter.get("/", CategoryController.getAll);

categoryRouter.get("/:id", CategoryController.getById);

// rutas privadas
categoryRouter.post(
  "/",
  verifyToken,
  requireRole("admin"),
  categoryValidate,
  CategoryController.create,
);

categoryRouter.put(
  "/:id",
  verifyToken,
  requireRole("admin"),
  categoryValidate,
  CategoryController.update,
);

categoryRouter.delete(
  "/:id",
  verifyToken,
  requireRole("admin"),
  CategoryController.delete,
);

export default categoryRouter;
