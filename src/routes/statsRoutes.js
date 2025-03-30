const express = require("express");
const StatsController = require("../controllers/StatsController");
const { auth, admin } = require("../middlewares/auth");

const statsRoute = express.Router();

statsRoute.get("/total-users", auth, admin, StatsController.getTotalUsers);
statsRoute.get("/total-movies", auth, admin, StatsController.getTotalMovies);
statsRoute.get("/most-reviewed-movies", auth, admin, StatsController.getMostReviewedMovies);

module.exports = statsRoute;
