const express = require ("express");
const PackController = require ("./controller");

const router = express.Router();

router.get("/", PackController.getAllPack)
router.get("/:id", PackController.getAllLessByIdPack)





module.exports = router;
