const express = require("express");
const LessonController = require("./controller");

const router = express.Router();


router.get("/", LessonController.getAllLessons);
router.get("/:id", LessonController.getAllStepsByIdLess);





module.exports= router;
