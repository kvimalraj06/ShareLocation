const HttpError = require("../models/http-error");
const { v4: uuid } = require("uuid");

const { validationResult } = require("express-validator");

let dummyPlaces = [
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
      new HttpError("Could not find the place with provided place id.", 404)
    );
  }
  res.status(200).json({ places });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  let places = dummyPlaces.filter((place) => {
    return place.creatorId === userId;
  });
  if (places.length === 0) {
    return next(
      new HttpError("Could not find the places with provided place id.", 404)
    );
  }
  res.status(200).json({ places });
};

const createPlace = (req, res, next) => {
  const { place, description, creatorId } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data.",
      422
    );
    return next(error);
  }
  const createdPlace = {
    id: uuid(),
    place,
    description,
    creatorId,
  };
  dummyPlaces.push(createdPlace);
  res.status(201).json({ createdPlace });
};

const updatePlace = (req, res, next) => {
  const { place, description } = req.body;

  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data.",
      422
    );
    return next(error);
  }

  const placeId = req.params.pid;

  const updatedPlace = {
    ...dummyPlaces.find((place) => place.id === placeId),
    place,
    description,
  };
  const placeIndex = dummyPlaces.findIndex((place) => place.id === placeId);
  dummyPlaces[placeIndex] = updatedPlace;
  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  const placeToDelete = dummyPlaces.find((place) => place.id === placeId);
  if (!placeToDelete) {
    const error = new HttpError("Could not find the place", 404);
    return next(error);
  }
  dummyPlaces = dummyPlaces.filter((place) => place.id !== placeId);
  res.status(200).json({ message: "Place deleted succesfully" });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
