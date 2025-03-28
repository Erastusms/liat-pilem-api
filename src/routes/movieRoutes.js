const express = require("express");
const MovieController = require("../controllers/MovieController");
const { auth, admin } = require("../middlewares/auth");
const validator = require("../middlewares/validate");
const { movieSchema } = require("../validations/movieValidation");
const reviewRoute = require("./reviewRoutes");

const movieRoute = express.Router();

movieRoute.get("/", MovieController.getMovies);
movieRoute.get("/:id", MovieController.getDetailMovie);
movieRoute.post(
  "/",
  auth,
  admin,
  validator(movieSchema, "body"),
  MovieController.createMovie
);
movieRoute.put(
  "/:id",
  auth,
  admin,
  validator(movieSchema, "body"),
  MovieController.updateMovie
);
movieRoute.delete("/:id", auth, admin, MovieController.deleteMovie);

// Route Review
movieRoute.use("/:id/reviews", reviewRoute);

module.exports = movieRoute;
