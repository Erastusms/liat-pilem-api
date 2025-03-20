const { errorRes, successRes } = require("../helpers/responses");
const UserModel = require("../models/UserModel");
const { generateToken } = require("../utils/jwt");
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
      return successRes(res, 200, "Login successful", { token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
