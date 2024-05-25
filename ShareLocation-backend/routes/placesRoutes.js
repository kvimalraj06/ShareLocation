const express = require("express");

const router = express.Router();

const HttpError = require("../models/http-error");
const placesRoutes = require("../controllers/places-controllers");

router.get("/:pid", placesRoutes.getPlaceById);

router.get("/users/:uid", placesRoutes.getPlaceByUserId);

module.exports = router;
