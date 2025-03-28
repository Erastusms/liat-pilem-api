const { successRes, errorRes } = require("../helpers/responses");
const ReviewModel = require("../models/ReviewModel");

class ReviewController {
  static async addReview(req, res, next) {
    try {
      const movie_id = req.originalUrl.split("/")[4];
      const { rating, comment } = req.body;
      const newReview = await ReviewModel.addReview({
        user_id: req.user.userId,
        movie_id,
        rating,
        comment,
      });
      return successRes(res, 201, "Review created successfully", newReview);
    } catch (error) {
      next(error);
    }
  }

  static async deleteReview(req, res, next) {
    try {
      const deletedReview = await ReviewModel.deleteReview(
        req.user.userId,
        req.params.reviewId
      );

      if (!deletedReview) {
        return errorRes(res, 404, "Review Not Found");
      }
      return successRes(res, 200, "Review deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReviewController;
