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
}

module.exports = new TokenService();
