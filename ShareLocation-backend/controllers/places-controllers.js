const HttpError = require("../models/http-error");

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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const places = dummyPlaces.find((p) => {
    return placeId === p.id;
  });

  if (!places) {
    return next(
      new HttpError("Could not find the places with provided place id.", 404)
    );
  }
  res.json({ places });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  let places = dummyPlaces.find((place) => {
    return place.creatorId === userId;
  });
  if (!places) {
    return next(
      new HttpError("Could not find the places with provided place id.", 404)
    );
  }
  res.json({ places });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
