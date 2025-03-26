const express = require("express");
const MovieController = require("../controllers/MovieController");
const {
  adminMiddleware,
  authMiddleware,
} = require("../middlewares/authMiddleware");
const validator = require("../middlewares/validate");
const { movieSchema } = require("../validations/movieValidation");

const movieRoute = express.Router();

movieRoute.post(
  "/",
  authMiddleware,
  adminMiddleware,
  validator(movieSchema, "body"),
  MovieController.createMovie
);
movieRoute.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validator(movieSchema, "body"),
  MovieController.updateMovie
);
movieRoute.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  MovieController.deleteMovie
);

module.exports = movieRoute;
