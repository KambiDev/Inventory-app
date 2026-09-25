import jwt from "jsonwebtoken";
import { JWT_CONFIG } from "../config/config.js";

export function verifyToken(req, res, next) {
  const authHeader = req.headers["token"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado: credenciales invalidas" });
  }

  try {
    const decoded = jwt.verify(token, JWT_CONFIG.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token invalido o expirado" });
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res
        .status(403)
        .json({ message: "Acceso denegado: necesita permisos de " + role });
    }
    next();
  };
}
