const pool = require('../config/db');

const UserModel = {
    async createUser({ username, email, password }) {
        const query = `
      INSERT INTO users (username, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
        const values = [username, email, password, "member"];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    async getUserByEmail(email) {
        const query = `SELECT * FROM users WHERE email = $1;`;
        const { rows } = await pool.query(query, [email]);
        return rows[0] || null;
    }
};

module.exports = UserModel;
