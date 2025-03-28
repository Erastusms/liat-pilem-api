const pool = require("../config/db");

const WatchlistModel = {
  async addToWatchlist({ userId, movieId, status }) {
    const query = `INSERT INTO watchlist (user_id, movie_id, status)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, movie_id) DO UPDATE 
      SET status = EXCLUDED.status
      RETURNING *;`;
    const values = [userId, movieId, status];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  async getWatchlist(userId) {
    const query = `
      SELECT w.watchlist_id, w.status, m.movie_id, m.title, m.description, m.release_date
      FROM watchlist w
      JOIN movies m ON w.movie_id = m.movie_id
      WHERE w.user_id = $1;`;
    const result = await pool.query(query, [userId]);
    return result.rows;
  },

  async removeFromWatchlist({ userId, watchlistId }) {
    const query = `
      DELETE FROM watchlist 
      WHERE watchlist_id = $1 AND user_id = $2
      RETURNING *;
    `;
    const result = await pool.query(query, [watchlistId, userId]);
    return result.rows[0];
  },
};

module.exports = WatchlistModel;
