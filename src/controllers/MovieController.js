const { successRes, errorRes } = require("../helpers/responses");
const MovieModel = require("../models/MovieModel");
const { getToday } = require("../utils/moment");

class MovieController {
  static async createMovie(req, res, next) {
    const { categories, ...paramMovie } = req.body;
    try {
      const newMovie = await MovieModel.createMovie(paramMovie);
      const values = categories
        .map((category) => `('${newMovie.movie_id}', '${category}')`)
        .join(", ");
      await MovieModel.addCategory(values);
      return successRes(res, 201, "Movie created successfully", newMovie);
    } catch (error) {
      next(error);
    }
  }

  static async getMovies(req, res, next) {
    const { search } = req.query;
    try {
      const dataMovies = await MovieModel.getAllMovies(search);
      return successRes(res, 200, "Show All Movies", dataMovies);
    } catch (error) {
      next(error);
    }
  }

  static async getDetailMovie(req, res, next) {
    try {
      const movie = await MovieModel.getMovieDetail(req.params.id);
      if(!movie) return errorRes(res, 404, "Movie Not Found")
      return successRes(res, 200, "Show Detail Movie", movie);
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const { id } = req.params;
      const updatedMovie = await MovieModel.updateMovie({
        movieId: id,
        updatedAt: getToday(),
        ...req.body,
      });

      if (!updatedMovie) {
        return errorRes(res, 404, "Movie not found");
      }
      return successRes(res, 200, "Movie updated successfully");
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const { id } = req.params;
      await MovieModel.deleteMovie(id);
      return successRes(res, 200, "Movie deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController;
