const ErrorHandler = require('../error/ErrorHandler');
const tokenService = require('../services/tokenService');

async function checkToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return next(ErrorHandler.unauthorized());
    }

    const userData = await tokenService.validateAccessToken(token);
    if (!userData) {
      return next(ErrorHandler.unauthorized());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(ErrorHandler.badRequest('something wrong'));
  }
}

async function checkId(req, res, next) {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    next();
  } else {
    return next(ErrorHandler.badRequest('you are not allowed to do that'));
  }
}

async function checkRole(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    return next(ErrorHandler.wrongRole());
  }
}

module.exports = {
  checkToken,
  checkId,
  checkRole,
};
