const router = require("express").Router();
const authRoute = require("./authRoutes");
const categoryRoute = require("./categoryRoutes");
const movieRoute = require("./movieRoutes");
const statsRoute = require("./statsRoutes");
const userRoute = require("./userRoutes");
const watchlistRoute = require("./watchlistRoutes");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/movies", movieRoute);
router.use("/categories", categoryRoute);
router.use("/watchlist", watchlistRoute);
router.use("/stats", statsRoute);

module.exports = router;
