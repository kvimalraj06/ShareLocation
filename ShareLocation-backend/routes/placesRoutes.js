const express = require("express");
const router = express.Router();

const dummyPlaces = [
  {
    id: "p1",
    place: "Spencer Plaza",
    description: "Best place to shop",
    creatorId: "u1",
  },
  {
    id: "p2",
    place: "Marina Beach",
    description: "Best place to chill",
    creatorId: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const places = dummyPlaces.find((p) => {
    return placeId === p.id;
  });

  if (!places) {
    const error = new Error(
      "Could not find the places with provided place id."
    );
    error.code = 404;
    return next(error);
  }
  res.json({ places });
});

router.get("/users/:uid", (req, res, next) => {
  const userId = req.params.uid;
  let places = dummyPlaces.find((place) => {
    return place.creatorId === userId;
  });
  if (!places) {
    const error = new Error("Could not find the places with provided user id.");
    error.code = 404;
    return next(error);
  }
  res.json({ places });
});

module.exports = router;
