var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.json([
    {
      id: 1,
      username: "pauliina"
    },
    {
      id: 2,
      username: "chris"
    }
  ]);
});

module.exports = router;
