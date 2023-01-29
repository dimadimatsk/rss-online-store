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
      throw errorHandler.badRequest(`user with that username already exists`);
    }

    if (regMail) {
      throw errorHandler.badRequest(`user with that email already exists`);
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

  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw errorHandler.badRequest(`user with that email doesn't exist`);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw errorHandler.badRequest(`incorrect password`);
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw errorHandler.unauthorized();
    }

    const userData = await tokenService.validateRefreshToken(refreshToken);
    const isTokenExist = await tokenService.findToken(refreshToken);

    if (!userData || !isTokenExist) {
      throw errorHandler.unauthorized();
    }

    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }
}

module.exports = new AuthService();
