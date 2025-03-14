const argon2 = require('argon2');
const { UserModel } = require('../models');

class UserController {
    static async createUser(req, res, next) {
        try {
            const { username, email, password } = req.body
            const hashedPassword = await argon2.hash(password); // hashing dengan argon2
            const user = await UserModel.createUser({ username, email, password: hashedPassword });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await UserModel.getUserByEmail(email);
            if (!user) {
                return res.status(401).json({ message: 'User not found!' });
            }
            
            const isPasswordValid = await argon2.verify(user.password_hash, password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            res.json({ message: 'Login successful', user: { id: user.user_id, email: user.email, role: user.role } });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;
