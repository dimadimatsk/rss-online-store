module.exports = class ErrorHandler extends Error {
  status;
  message;

  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ErrorHandler(400, message);
  }

  static unauthorized() {
    return new ErrorHandler(401, 'unauthorized user');
  }
};
