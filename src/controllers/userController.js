const argon2 = require('argon2');
const { UserModel } = require('../models');

class UserController {
    static async createUser(req, res, next) {
        try {
            console.log(req.body)
            const { username, email, password } = req.body
            const hashedPassword = await argon2.hash(password); // hashing dengan argon2
            const user = await UserModel.createUser({ username, email, hashedPassword });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

module.exports = UserController;
