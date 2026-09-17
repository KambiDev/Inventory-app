import pool from "../config/db.js";

class UserModel {
  static async create({ username, password, email, role }) {
    const [result] = await pool.execute(
      "INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?);",
      [username, password, email, role],
    );
    return {
      id: result.insertId,
      username,
      email,
      role,
    };
  }

  static async findByEmail(email) {
    const [rows] = await pool.execute(
      "SELECT username, password, email, role FROM users WHERE email = ?;",
      [email],
    );
    return rows[0] ?? null;
  }
}

export default UserModel;
