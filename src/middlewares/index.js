function isAdmin(req, res, next) {
  const secret = req.get('X-Admin-Secret');
  if (secret === process.env.ADMIN_SECRET) {
    next();
  } else {
    res.status(401);
    const error = new Error('Un-Authorized');
    next(error);
  }
}

function notFound(req, res, next) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  const { message, stack } = error;
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status).json({
    message,
    status,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : stack,
  });
}

module.exports = { isAdmin, errorHandler, notFound };
