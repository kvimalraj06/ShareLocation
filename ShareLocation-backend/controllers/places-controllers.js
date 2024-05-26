const HttpError = require("../models/http-error");
const { v4: uuid } = require("uuid");

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
      new HttpError("Could not find the places with provided place id.", 404)
    );
  }
  res.status(200).json({ places });
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
  res.status(200).json({ places });
};

const createPlace = (req, res, next) => {
  const { title, description, creatorId } = req.body;
  const createdPlace = {
    id: uuid(),
    place: title,
    description,
    creatorId,
  };
  dummyPlaces.push(createdPlace);
  res.status(201).json({ createdPlace });
};

const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = {
    ...dummyPlaces.find((place) => place.id === placeId),
    place: title,
    description,
  };
  const placeIndex = dummyPlaces.findIndex((place) => place.id === placeId);
  dummyPlaces[placeIndex] = updatedPlace;
  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  dummyPlaces = dummyPlaces.filter((place) => place.id !== placeId);
  res.status(200).json({ message: "Place deleted succesfully" });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
