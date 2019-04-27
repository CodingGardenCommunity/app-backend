const contributors = require('./api/contributors/contributors.routes');
const faq = require('./api/faq/faq.routes');
const admin = require('./api/admin/admin.routes');
const history = require('./api/history/history.routes');

module.exports = {
  contributors, faq, admin, history,
};
