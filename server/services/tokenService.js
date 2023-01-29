const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '60m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return { accessToken, refreshToken };
  }

  async saveToken(id, refreshToken) {
    const tokenData = await Token.findOne({ user: id });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }

    const token = await Token.create({ user: id, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
  }

  async validateRefreshToken(refreshToken) {
    try {
      const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async validateAccessToken(accessToken) {
    try {
      const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
