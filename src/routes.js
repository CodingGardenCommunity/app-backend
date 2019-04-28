const { Router } = require("express");

const { isAdmin } = require("./middlewares");
const contributors = require("./api/contributors/contributors.routes");
const faq = require("./api/faq/faq.routes");
const admin = require("./api/admin/admin.routes");
const history = require("./api/history/history.routes");

const router = Router();

router.use("/contributors", contributors);
router.use("/faq", faq);
router.use("/admin", isAdmin, admin);
router.use("/history", history);

module.exports = router;
