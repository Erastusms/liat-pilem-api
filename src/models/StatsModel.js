const pool = require("../config/db");

const StatsModel = {
    async getTotalUsers() {
        const query = `SELECT COUNT(*) AS total_users FROM users;`;
        const result = await pool.query(query);
        return result.rows[0].total_users;
    },

    async getTotalMovies() {
        const query = `SELECT COUNT(*) AS total_movies FROM movies;`;
        const result = await pool.query(query);
        return result.rows[0].total_movies;
    },

    async getMostReviewedMovies() {
        const query = `
      SELECT 
        m.movie_id, 
        m.title, 
        COUNT(r.review_id) AS total_reviews 
      FROM movies m
      JOIN reviews r ON m.movie_id = r.movie_id
      GROUP BY m.movie_id
      ORDER BY total_reviews DESC
      LIMIT 10;
    `;
        const result = await pool.query(query);
        return result.rows;
    }
};

module.exports = StatsModel;
