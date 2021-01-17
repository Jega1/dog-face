const express = require("express");
const DogController = require("./controller");
const checkAuth = require('../../helpers/check-auth');
const router = express.Router();

const multer = require('multer');
const upload = multer();

//middleware -- filter to our request
// router.use(checkAuth);
router.get("/user/:id", DogController.getAllDogsByUser)
router.get("/:id", DogController.getDogById)
router.post("/register", DogController.registerDog);
router.put("/:id", DogController.editDog);
router.post('/add-dog-image', upload.single('dogImage'), DogController.addDogImage);
router.post('/add-dog-images', upload.array('dogImage',10), DogController.addDogImage1);
router.delete('/:id_image', DogController.deleteDogImage);
router.get("/images/:id_dog", DogController.getAllDogImages);



module.exports = router;
