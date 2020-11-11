// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/html-routes")

// Port
const PORT = process.env.PORT || 3000;

// Express Set-Up
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/baseballstatsdb",
  { useNewUrlParser: true }
);

app.use(routes);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
