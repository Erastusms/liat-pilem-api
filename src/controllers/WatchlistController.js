const { successRes, errorRes } = require("../helpers/responses");
const WatchlistModel = require("../models/WatchlistModel");
const watchlistSchema = require("../validations/watchlistValidation");

class WatchlistController {
  static async addToWatchlist(req, res, next) {
    try {
      await WatchlistModel.addToWatchlist({
        userId: req.user.userId,
        movieId: req.body.movieId,
        status: req.body.status,
      });
      return successRes(res, 201, "Movie successfully added to Watchlist");
    } catch (error) {
      next(error);
    }
  }

  static async getWatchlist(req, res, next) {
    try {
      const watchlist = await WatchlistModel.getWatchlist(req.user.userId);
      return successRes(res, 200, "Show MY Watchlist", watchlist);
    } catch (error) {
      next(error);
    }
  }

  static async removeFromWatchlist(req, res, next) {
    try {
      const deletedItem = await WatchlistModel.removeFromWatchlist({
        userId: req.user.userId,
        watchlistId: req.params.id,
      });

      if (!deletedItem) return errorRes(res, 404, "Movie Not Found");
      return successRes(res, 200, "Movie successfully deleted from Watchlist");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = WatchlistController;
