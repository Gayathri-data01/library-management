const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Members route");
});

module.exports = router;