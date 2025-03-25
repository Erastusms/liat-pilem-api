const pool = require("../config/db");

class MovieModel {
  static async createMovie(paramMovie) {
    const { title, genre, releaseDate, director, rating } = paramMovie;
    const { rows } = await pool.query(
      `INSERT INTO movies (title, genre, release_date, director, rating) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, genre, releaseDate, director, rating]
    );
    return rows[0];
  }

  static async updateMovie(paramMovie) {
    const { movieId, title, genre, releaseDate, director, rating } = paramMovie;
    const { rows } = await pool.query(
      `UPDATE movies SET title = $1, genre = $2, release_date = $3, director = $4, rating = $5 
       WHERE movie_id = $6 RETURNING *`,
      [title, genre, releaseDate, director, rating, movieId]
    );
    return rows[0];
  }

  static async deleteMovie(movieId) {
    await pool.query("DELETE FROM movies WHERE movie_id = $1", [movieId]);
  }
}

module.exports = MovieModel;
