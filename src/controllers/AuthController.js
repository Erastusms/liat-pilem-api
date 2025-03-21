const { errorRes, successRes } = require("../helpers/responses");
const UserModel = require("../models/UserModel");
const { generateToken, generateRefreshToken } = require("../utils/jwt");
const { getToday } = require("../utils/moment");
const { hashPassword, verifyPassword } = require("../utils/password");

class AuthController {
  static async register(req, res, next) {
    try {
      const { username, email, password, role } = req.body;
      const existingUser = await UserModel.getUserByEmail(email);

      if (existingUser) {
        return errorRes(res, 400, "Email already registered");
      }

      const passwordHash = await hashPassword(password);
      await UserModel.createUser({
        username,
        email,
        password: passwordHash,
        role: role || "member",
      });

      return successRes(res, 201, "User Registered Succesfully");
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.getUserByEmail(email);

      if (!user) {
        return errorRes(res, 401, "Invalid Email");
      }

      const isValidPassword = await verifyPassword(
        user.password_hash,
        password
      );

      if (!isValidPassword) {
        return errorRes(res, 401, "Invalid Password");
      }

      const token = generateToken(user);
      const refreshToken = generateRefreshToken(user);

      return successRes(res, 200, "Login successful", { token, refreshToken });
    } catch (error) {
      next(error);
    }
  }

  static async profile(req, res, next) {
    try {
      const user = await UserModel.findById(req.user.userId);
      if (!user) {
        return errorRes(res, 404, "User not found");
      }

      return successRes(res, 200, "Show Profile", user);
    } catch (error) {
      next(error);
    }
  }

  static async updateProfile(req, res, next) {
    try {
      const user = await UserModel.findById(req.user.userId);
      const { username, email, password } = req.body;
      let passwordHash = null;
      if (password) {
        passwordHash = await hashPassword(password);
      }
      
      await UserModel.updateUser(req.user.userId, {
        username: username ?? user.username,
        email: email ?? user.email,
        passwordHash: passwordHash ?? user.password_hash,
        updatedAt: getToday(),
      });

      return successRes(res, 200, "Update Profile successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
