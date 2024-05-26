const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/placesRoutes");
const userRoutes = require("./routes/userRoutes");
const noCache = require("./middlewares/noCache");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use(noCache);

app.use("/api/places", placeRoutes);

app.use((req, res, next) => {
  const error = new HttpError("could not find this route.", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

app.listen(5000);
