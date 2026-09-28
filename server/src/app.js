import express from "express";
import authRouter from "./routes/auth.routes.js";
import categoryRouter from "./routes/category.routes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);

app.use((err, req, res, next) => {
  return res.status(500).json({ message: "Error interno del servidor." });
});

export default app;
