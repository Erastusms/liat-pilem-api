const router = require("express").Router();
const authRoute = require("./authRoutes");
const categoryRoute = require("./categoryRoutes");
const movieRoute = require("./movieRoutes");
const userRoute = require("./userRoutes");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/movies", movieRoute);
router.use("/categories", categoryRoute);

module.exports = router;
