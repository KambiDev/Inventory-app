import brcryptjs from "bcryptjs";
import UserModel from "../models/user.model.js";

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
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  static async login(req, res) {}
}

export default AuthController;
