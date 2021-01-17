const express = require("express");
const MedicalController = require("./controller");

const router = express.Router();


router.post("/add-medical", MedicalController.registerMedical);
router.put("/edit-medical/:id_medical", MedicalController.editMedical);
router.get("/vaccin/:id_dog", MedicalController.getAllVaccinsByDog);
router.get("/sick/:id_dog", MedicalController.getAllSicksByDog);


module.exports = router;
