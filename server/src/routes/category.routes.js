import { Router } from "express";
import CategoryController from "../controllers/category.controller";
import { requireRole, verifyToken } from "../middlewares/auth";

const categoryRouter = Router();

// rutas publicas
categoryRouter.get("/", CategoryController.getAll);

categoryRouter.get("/:id", CategoryController.getById);

// rutas privadas
categoryRouter.post(
  "/",
  verifyToken,
  requireRole("admin"),
  CategoryController.create,
);

categoryRouter.patch(
  "/:id",
  verifyToken,
  requireRole("admin"),
  CategoryController.update,
);

categoryRouter.delete(
  "/:id",
  verifyToken,
  requireRole("admin"),
  CategoryController.delete,
);

export default categoryRouter;
