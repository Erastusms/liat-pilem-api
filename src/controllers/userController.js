const argon2 = require('argon2');
const { UserModel } = require('../models');
const { successRes, errorRes } = require('../helpers/responses');

class UserController {
    static async createUser(req, res, next) {
        try {
            const { username, email, password } = req.body
            const hashedPassword = await argon2.hash(password); // hashing dengan argon2
            const user = await UserModel.createUser({ username, email, password: hashedPassword });
            return successRes(res, 201, "User Registered Succesfully", user)
        } catch (error) {
            next(error)
        }
    };

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await UserModel.getUserByEmail(email);
            if (!user) {
                return errorRes(res, 401, "Invalid Email")
            }

            const isPasswordValid = await argon2.verify(user.password_hash, password);
            if (!isPasswordValid) {
                return errorRes(res, 401, "Invalid Password")
            }

            return successRes(res, 201, "Login successful", user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;
