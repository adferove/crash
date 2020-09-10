const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  //Log to console for dev
  console.log(err);

  let error = { ...err };
  //Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of: ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((item) => item.message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Internal Server Error' });
};

module.exports = errorHandler;
