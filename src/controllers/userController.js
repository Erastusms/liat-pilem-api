const { UserModel } = require('../models');

class UserController {
    static async createUser(req, res, next) {
        try {
            console.log(req.body)
            const { username, email, password } = req.body
            const user = await UserModel.createUser({ username, email, password });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

module.exports = UserController;
