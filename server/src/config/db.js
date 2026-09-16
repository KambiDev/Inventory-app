import mysql from "mysql2/promise";
import { DB_CONFIG } from "./config.js";

const pool = mysql.createPool({
  host: DB_CONFIG.host,
  user: DB_CONFIG.user,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  connectionLimit: 10,
});

export default pool;
