const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("get request received");
  res.json({ message: "It works" });
});

module.exports = router;
