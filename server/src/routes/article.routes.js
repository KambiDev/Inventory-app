import { Router } from "express";
import ArticleController from "../controllers/article.controller.js";
import { verifyToken, requireRole } from "../middlewares/auth.js";

const articleRouter = Router();

articleRouter.get("/", ArticleController.getAll);

articleRouter.get("/:article_id", ArticleController.getById);

articleRouter.post(
  "/",
  verifyToken,
  requireRole("admin"),
  ArticleController.create,
);

articleRouter.put(
  "/:article_id",
  verifyToken,
  requireRole("admin"),
  ArticleController.update,
);

articleRouter.delete(
  "/:article_id",
  verifyToken,
  requireRole("admin"),
  ArticleController.delete,
);

export default articleRouter;
