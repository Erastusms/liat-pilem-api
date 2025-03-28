const express = require("express");
const watchlistRoute = express.Router();
const WatchlistController = require("../controllers/WatchlistController");
const { auth } = require("../middlewares/auth");
const validator = require("../middlewares/validate");
const { watchlistSchema } = require("../validations/watchlistValidation");

watchlistRoute.post(
  "/",
  auth,
  validator(watchlistSchema, "body"),
  WatchlistController.addToWatchlist
);
watchlistRoute.get("/", auth, WatchlistController.getWatchlist);
watchlistRoute.delete("/:id", auth, WatchlistController.removeFromWatchlist);

module.exports = watchlistRoute;
