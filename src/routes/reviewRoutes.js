const express = require("express");
const ReviewController = require("../controllers/ReviewController");
const { auth } = require("../middlewares/auth");
const validator = require("../middlewares/validate");
const { reviewSchema } = require("../validations/reviewValidation");

const reviewRoute = express.Router();

reviewRoute.post(
  "/",
  auth,
  validator(reviewSchema, "body"),
  ReviewController.addReview
);
reviewRoute.delete("/:reviewId", auth, ReviewController.deleteReview);

module.exports = reviewRoute;
