const express = require("express");
const router = express.Router();

const dummyPlaces = [
  {
    id: "p1",
    place: "Spencer Plaza",
    description: "Best place to shop",
  },
  {
    id: "p2",
    place: "Marina Beach",
    description: "Best place to chill",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const places = dummyPlaces.find((place) => {
    return placeId === place.id;
  });
  res.json(places);
});

module.exports = router;
