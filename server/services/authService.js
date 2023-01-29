const User = require('../models/User');
const bcrypt = require('bcrypt');
const UserDto = require('../dtos/userDto');
const tokenService = require('./tokenService');
const errorHandler = require('../error/ErrorHandler');

class AuthService {
  async register(username, email, password) {
    const regUser = await User.findOne({ username });
    const regMail = await User.findOne({ email });

    if (regUser) {
      throw errorHandler.badRequest(`user with that username exists`);
    }

    if (regMail) {
      throw errorHandler.badRequest(`user with that email exists`);
    }

    const hashPassword = await bcrypt.hash(password, 7);
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }
}

module.exports = new AuthService();
