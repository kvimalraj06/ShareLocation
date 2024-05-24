const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/placesRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/api/places", placeRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

app.listen(5000);
