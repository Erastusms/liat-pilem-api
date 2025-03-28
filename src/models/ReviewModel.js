const pool = require("../config/db");

const ReviewModel = {
  async addReview(paramReview) {
    const { user_id, movie_id, rating, comment } = paramReview;
    const query = `
      INSERT INTO reviews (user_id, movie_id, rating, comment)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [user_id, movie_id, rating, comment];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  async deleteReview(userId, reviewId) {
    const query = `
      DELETE FROM reviews 
      WHERE review_id = $1 AND user_id = $2 
      RETURNING *;
    `;
    const result = await pool.query(query, [reviewId, userId]);
    return result.rows[0];
  },
};

module.exports = ReviewModel;
