"use stricts";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

const home = require("./src/routes/home");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;
