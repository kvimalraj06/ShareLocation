const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/placesRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/api/places", placeRoutes);
app.use("/api/users", userRoutes);

app.listen(5000);
