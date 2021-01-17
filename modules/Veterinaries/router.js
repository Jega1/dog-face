const express= require("express");
const VetController= require("./controller");

const router = express.Router();

router.get("/", VetController.getAllVet);
router.get("/:id", VetController.getHoursByVet);
router.post("/take-appoint/", VetController.takeAppointment);
router.post("/cancel-appoint", VetController.cancelAppointment);
//router.post("/display-time", VetController.displayTime);




module.exports = router;
