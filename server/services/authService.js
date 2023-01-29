const User = require('../models/User');
const bcrypt = require('bcrypt');
const UserDto = require('../dtos/userDto');
const tokenService = require('./tokenService');

class AuthService {
  async register(username, email, password) {
    const regUser = await User.findOne({ username });
    const regMail = await User.findOne({ email });

    if (regUser) {
      throw new Error(`user with ${username} exists`);
    }

    if (regMail) {
      throw new Error(`user with ${email} exists`);
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
