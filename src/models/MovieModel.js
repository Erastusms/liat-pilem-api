const pool = require("../config/db");

class MovieModel {
  static async createMovie(paramMovie) {
    const { director, title, description, releaseDate, duration, rating } =
      paramMovie;
    const { rows } = await pool.query(
      `INSERT INTO movies (director, title, description, release_date, duration, rating) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [director, title, description, releaseDate, duration, rating]
    );
    return rows[0];
  }

  static async addCategory(values) {
    const { rows } = await pool.query(
      `INSERT INTO movie_categories (movie_id, category_id) VALUES ${values};`
    );
    return rows[0];
  }

  static async getAllMovies() {
    const { rows } = await pool.query(`
      SELECT 
          m.movie_id, 
          m.title, 
          m.description, 
          m.release_date, 
          m.rating, 
          COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
      FROM movies m
      LEFT JOIN movie_categories mc ON m.movie_id = mc.movie_id
      LEFT JOIN categories c ON mc.category_id = c.category_id
      GROUP BY m.movie_id
      ORDER BY m.title ASC;
    `);
    return rows;
  }

  static async updateMovie(paramMovie) {
    const {
      movieId,
      director,
      title,
      description,
      releaseDate,
      duration,
      rating,
      updatedAt,
    } = paramMovie;
    const { rows } = await pool.query(
      `UPDATE movies SET director = $1, title = $2, description = $3, release_date = $4, duration = $5, rating = $6, updated_at = $7
       WHERE movie_id = $8 RETURNING *`,
      [
        director,
        title,
        description,
        releaseDate,
        duration,
        rating,
        updatedAt,
        movieId,
      ]
    );
    return rows[0];
  }

  static async deleteMovie(movieId) {
    await pool.query("DELETE FROM movies WHERE movie_id = $1", [movieId]);
  }
}

module.exports = MovieModel;
