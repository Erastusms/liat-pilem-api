const express = require("express");
const MovieController = require("../controllers/MovieController");
const { auth, admin } = require("../middlewares/auth");
const validator = require("../middlewares/validate");
const { movieSchema } = require("../validations/movieValidation");

const movieRoute = express.Router();

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

module.exports = movieRoute;
