const { successRes, errorRes } = require("../helpers/responses");
const MovieModel = require("../models/MovieModel");

class MovieController {
  static async createMovie(req, res, next) {
    try {
      const newMovie = await MovieModel.createMovie(req.body);
      return successRes(res, 201, "Movie created successfully", newMovie);
    } catch (error) {
      next();
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const { id } = req.params;
      const updatedMovie = await MovieModel.updateMovie({
        movieId: id,
        ...req.body,
      });

      if (!updatedMovie) {
        return errorRes(res, 404, "Movie not found");
      }
      return successRes(res, 200, "Movie updated successfully");
    } catch (error) {
      next();
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const { id } = req.params;
      await MovieModel.deleteMovie(id);
      return successRes(res, 200, "Movie deleted successfully");
    } catch (error) {
      next();
    }
  }
}

module.exports = MovieController;
