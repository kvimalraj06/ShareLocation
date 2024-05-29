const express = require("express");

const router = express.Router();

const HttpError = require("../models/http-error");
const usersRoutes = require("../controllers/users-controllers");

router.get("/", usersRoutes.getUsers);
router.post("/signup", usersRoutes.signup);
router.post("/login", usersRoutes.login);

module.exports = router;
