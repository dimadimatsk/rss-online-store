const ErrorHandler = require('../error/ErrorHandler');
const tokenService = require('../services/tokenService');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return next(ErrorHandler.unauthorized());
    }

    const userData = tokenService.validateAccessToken(token);
    if (!userData) {
      return next(ErrorHandler.unauthorized());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(ErrorHandler.badRequest('something wrong'));
  }
};
