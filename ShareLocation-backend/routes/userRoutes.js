const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const HttpError = require("../models/http-error");
const usersRoutes = require("../controllers/users-controllers");

router.get("/", usersRoutes.getUsers);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersRoutes.signup
);
router.post("/login", usersRoutes.login);

module.exports = router;
