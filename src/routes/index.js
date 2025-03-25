const router = require("express").Router();
const authRoute = require("./authRoutes");
const userRoute = require("./userRoutes");

router.use("/auth", authRoute);
router.use("/users", userRoute);

module.exports = router;
