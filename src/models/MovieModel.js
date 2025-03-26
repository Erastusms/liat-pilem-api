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
