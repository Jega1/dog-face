const express = require("express");
const TrainningController = require("./controller");

const router = express.Router();

router.get("/", TrainningController.getAll);
router.post("/", TrainningController.registerTraining);
router.put("/:id", TrainningController.editTraining);

module.exports = router;
