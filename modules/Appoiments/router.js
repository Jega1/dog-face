const express = require("express");
const AppointmentController = require("./controller");

const router = express.Router();

router.get("/:id_vet", AppointmentController.getAppointByVet);
router.get("/user/:id_user", AppointmentController.getAppointsByUser);

module.exports = router;
