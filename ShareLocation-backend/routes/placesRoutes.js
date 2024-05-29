const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const HttpError = require("../models/http-error");
const placesRoutes = require("../controllers/places-controllers");

router.get("/:pid", placesRoutes.getPlaceById);
router.get("/users/:uid", placesRoutes.getPlacesByUserId);
router.post(
  "/",
  [check("place").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesRoutes.createPlace
);
router.patch(
  "/:pid",
  [check("place").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesRoutes.updatePlace
);
router.delete("/:pid", placesRoutes.deletePlace);

module.exports = router;
