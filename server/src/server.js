import app from "./app.js";
import pool from "./config/db.js";
import { PORT } from "./config/config.js";

async function startServer() {
  try {
    await pool.query("SELECT 1;");
    console.log("Conexion establecida a la DB exitosamente");
    app
      .listen(PORT, () => {
        console.log(`Servidor levantado en http://localhost:${PORT}`);
      })
      .on("error", (error) => {
        console.log("Error al levantar el servidor:", error.message);
        process.exit(1);
      });
  } catch (error) {
    console.log("Error al inicializar la base de datos:", error.message);
    process.exit(1);
  }
}

startServer();
