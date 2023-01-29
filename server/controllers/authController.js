const AuthService = require('../services/authService');

class AuthController {
  async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const userData = await AuthService.register(username, email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      console.error(error.message);
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }
}

module.exports = new AuthController();
