const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Frequently asked questions👋"
  });
});

module.exports = router;
