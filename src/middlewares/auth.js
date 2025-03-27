const { errorRes } = require("../helpers/responses");
const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return errorRes(res, 401, "Unauthorized");

  try {
    req.user = verifyToken(token);
    next();
  } catch (error) {
    errorRes(res, 401, "Invalid or expired token");
  }
};

const admin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return errorRes(res, 403, "Forbidden: Admin access required!")
  }
  next();
};


module.exports = { auth, admin };
