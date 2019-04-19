function isAdmin(req, res, next) {
  const secret = req.get('X-Admin-Secret');
  if (secret === process.env.ADMIN_SECRET) {
    next();
  } else {
    res.status(401);
    res.json({
      message: 'Un-Authorized',
    });
  }
}

module.exports = {
  isAdmin,
};
