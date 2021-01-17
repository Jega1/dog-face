const DogServices = require("./service");
//const { imageUpload } = require('../../config/image-upload.json');
 const { imageUpload } = require('../../config/keys');




	exports.getAllDogsByUser = (req, res) => {
		DogServices.getAllDogsByUser(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
	},


//dd

  exports.getDogById = (req, res) => {
    DogServices.getDogById(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  },


  exports.registerDog = (req, res) => {
        DogServices.registerDog(req, result => {
            result.success
                ? res.status(201).send(result)
                : res.status(404).send(result)
        })
	},


  exports.editDog = (req, res) => {
    DogServices.editDog(req, (result) => {
         result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },


  exports.addDogImage = (req, res) => {
    DogServices.addDogImage(req, (result) => {
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },


  exports.addDogImage1 =(req, res) => {

    DogServices.addDogImage1(req, (result) => {
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },








  exports.deleteDogImage = (req, res) => {
    DogServices.deleteDogImage(req, (result) => {
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },

  exports.getAllDogImages = (req, res) => {
		DogServices.getAllDogImages(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
	}

