const ErrorHandler = require('../error/ErrorHandler');
const tokenService = require('../services/tokenService');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return next(ErrorHandler.unauthorized());
    }

    const userData = await tokenService.validateAccessToken(token);
    if (!userData) {
      return next(ErrorHandler.unauthorized());
    }

    if (!userData.isAdmin) {
      return next(ErrorHandler.wrongRole());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(ErrorHandler.badRequest('something wrong'));
  }
};
