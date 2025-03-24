const { errorRes } = require("../helpers/responses");
const { verifyToken } = require("../utils/jwt");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return errorRes(res, 401, "Unauthorized");

  try {
    req.user = verifyToken(token);
    next();
  } catch (error) {
    errorRes(res, 401, "Invalid or expired token");
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return errorRes(res, 403, "Forbidden: Admin access required!")
  }
  next();
};


module.exports = { authMiddleware, adminMiddleware };
