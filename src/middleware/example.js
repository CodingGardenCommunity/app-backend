module.exports = (req, _, next) => {
  // simple logger example as placeholder for middleware
  process.stdout.write(`[${req.method}] from: ${req.ip} requesting: ${req.path}\n`);
  next();
};
