const router = require("express").Router();
const getHistory = require("./history.controller");

router.get("/", getHistory);

module.exports = router;
