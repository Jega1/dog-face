const express = require("express");
const RefController = require("./controller");

const router = express.Router();

router.get("/motif", RefController.getAllMotif)
router.get("/vaccin", RefController.getAllVaccin)



module.exports = router;
