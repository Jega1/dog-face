const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.json());
const HttpError = require('./models/http-error');
const db = require('./setup/database');


const usersRoutes = require("./modules/Users/router");
const dogRoutes = require("./modules/Dogs/router");
const vetRoutes = require("./modules/Veterinaries/router");
const trainningRoutes = require("./modules/Trainings/router");
const medicalRoutes = require("./modules/Medical/router");

const appointRoutes = require("./modules/Appoiments/router");
const packRoutes = require("./modules/Packages/router");
const lessonRoutes = require("./modules/Lesson/router");
const refRoutes = require("./modules/Reference/router");









app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Request body cookie parser
app.use(cookieParser());

app.use(morgan("tiny"));
app.use("/images", express.static(path.join(__dirname, "images")));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});



app.use("/api/user", usersRoutes);
app.use("/api/dog", dogRoutes);
app.use("/api/vet", vetRoutes);
app.use("/api/trainning", trainningRoutes);
app.use("/api/medical", medicalRoutes);
app.use("/api/appoint", appointRoutes);
app.use("/api/pack", packRoutes);
app.use("/api/lesson", lessonRoutes);
app.use("/api/ref", refRoutes);
app.use((req, res, next) => {
  const error = new HttpError('Could not find this routes.', 404);
  throw error;
});

module.exports = app;


