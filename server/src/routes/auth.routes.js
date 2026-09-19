import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import {
  registerValidate,
  loginValidate,
} from "../validators/auth.validate.js";

const authRouter = Router();

authRouter.post("/register", registerValidate, AuthController.register);

authRouter.post("/login", loginValidate, AuthController.login);

export default authRouter;
