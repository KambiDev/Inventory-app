import brcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import { JWT_CONFIG } from "../config/config.js";

class AuthController {
  static async register(req, res) {
    try {
      const { username, email, password, role = "user" } = req.body;

      const salt = await brcryptjs.genSalt(10);
      const hashedPassword = await brcryptjs.hash(password, salt);

      const newUser = await UserModel.create({
        username,
        email,
        password: hashedPassword,
        role,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      console.log("Error en el registro:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findByEmail(email);

      if (!user) {
        return res.status(401).json({ message: "credenciales invalidas" });
      }

      const isMatch = await brcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "credenciales invalidas" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        JWT_CONFIG.jwtSecret,
        { expiresIn: JWT_CONFIG.jwtExpiration },
      );

      const cookieOptions = {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      };

      res.cookie("token", token, cookieOptions);

      return res.status(200).json({
        message: "login exitoso",
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.log("Error en login:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}

export default AuthController;
