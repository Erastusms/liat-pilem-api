const pool = require("../config/db");

const UserModel = {
  async createUser({ username, email, password, role }) {
    const query = `INSERT INTO users (username, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;

    const values = [username, email, password, role];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async getUserByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1;`;
    const { rows } = await pool.query(query, [email]);
    return rows[0] || null;
  },

  async getUserByUsername(username) {
    const query = `SELECT * FROM users WHERE username = $1;`;
    const { rows } = await pool.query(query, [username]);
    return rows[0] || null;
  },

  async updateUser(userId, { username, email, passwordHash, updatedAt }) {
    const query = `UPDATE users
      SET username = $1, email = $2, password_hash = COALESCE($3, password_hash), updated_at = $4
      WHERE user_id = $5
      RETURNING user_id, username, email;`;

    const values = [username, email, passwordHash || null, updatedAt, userId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findById(userId) {
    const query = `SELECT * FROM users WHERE user_id = $1`;
    const { rows } = await pool.query(query, [userId]);
    return rows[0];
  },

  async updateRefreshToken(userId, refreshToken) {
    const query = `UPDATE users SET refresh_token = $1 WHERE user_id = $2`;
    await pool.query(query, [refreshToken, userId]);
  },

  async findByRefreshToken(refreshToken) {
    const query = `SELECT * FROM users WHERE refresh_token = $1`;
    const { rows } = await pool.query(query, [refreshToken]);
    return rows[0];
  }
};

module.exports = UserModel;
