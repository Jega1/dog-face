const express = require("express");
const router = express.Router();

const UserController =require("./controller");



//Public routes
router.get("/:id",UserController.getUser);
router.post("/authenticate",UserController.authenticate);

router.post("/register", UserController.register);

router.get("/vet/:id", UserController.getUserVet);
router.delete("/:id", UserController.delete);
router.put("/:id",UserController.editUser);





module.exports = router;


