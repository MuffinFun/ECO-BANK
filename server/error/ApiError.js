class ApiError extends Error {
  status;
  errors;
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'User not authorized!');
  }
  static forbidden(message) {
    return new ApiError(403, message);
  }
  static badRequest(message, errors = []) {
    return new ApiError(404, message, errors);
  }
  static internal(message) {
    return new ApiError(500, message);
  }
}
module.exports = ApiError;
