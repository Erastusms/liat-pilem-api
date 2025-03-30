const { successRes } = require("../helpers/responses");
const StatsModel = require("../models/StatsModel");

class StatsController {
    static async getTotalUsers(req, res, next) {
        try {
            const totalUsers = await StatsModel.getTotalUsers();
            return successRes(res, 200, "Show Total Users", { totalUsers });
        } catch (error) {
            next(error)
        }
    }

    static async getTotalMovies(req, res, next) {
        try {
            const totalMovies = await StatsModel.getTotalMovies();
            return successRes(res, 200, "Show Total Movies", { totalMovies });
        } catch (error) {
            next(error)
        }
    }

    static async getMostReviewedMovies(req, res, next) {
        try {
            const mostReviewedMovies = await StatsModel.getMostReviewedMovies();
            return successRes(res, 200, "Show Most Review Movies", { mostReviewedMovies });
        } catch (error) {
            next(error)
        }
    }
};

module.exports = StatsController;
