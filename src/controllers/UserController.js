const { successRes, errorRes } = require("../helpers/responses");
const UserModel = require("../models/UserModel");

class UserController {
    static async getAllUsers(req, res, next) {
        try {
            const users = await UserModel.getAllUsers();
            return successRes(res, 200, "Show Data User", users);
        } catch (error) {
            next(error);
        }
    }

    static async getUserById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await UserModel.getUserById(id);

            if (!user) {
                return errorRes(res, 404, "User not found");
            }

            return successRes(res, 200, "Show Data User", user);
        } catch (error) {
            next(error);
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await UserModel.getUserById(id);

            if (!user) {
                return errorRes(res, 404, "User not found");
            }
            
            await UserModel.deleteUser(id);
            return successRes(res, 200, "User deleted successfully");
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
