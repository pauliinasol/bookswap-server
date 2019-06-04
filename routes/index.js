var express = require("express");
var router = express.Router();
const uuid = require("uuid/v4");
const session = require("express-session");

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.use(
  session({
    genid: req => {
      console.log("Inside the session middleware");
      console.log(req.sessionID);
      return uuid(); // use UUIDs for session IDs
    },
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

// create the homepage route at '/'
router.get("/", (req, res) => {
  console.log("Inside the homepage callback function");
  console.log(req.sessionID);
  res.send(`You hit home page!\n`);
});

module.exports = router;
