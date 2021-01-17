const Queries = require("./query");




exports.registerDog = (req, callback) => {
    Queries.registerDog(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      }
    )
  },


  exports.getDogById = (req, callback) => {
		Queries.getDogById(
			req,
			(response) => {
				return callback({
					success: true,
					message: "information de ce dog",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	},





  exports.getAllDogsByUser = async (req, callback) => {
	await	Queries.getAllDogsByUser(
			req,
			(response) => {

				return callback({
					success: true,
					message: "all dogs of this user",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	},


  exports.editDog = (req, response) => {

  const dog = Queries.editDog(req);

     return response({ success: true, message: "dog details updated" });


  },



	exports.addDogImage = (req, callback) => {
    Queries.addDogImage(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      }
    )
  },

	exports.addDogImage1 = (req, callback) => {
    Queries.addDogImage1(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      }
    )
  },





  exports.deleteDogImage = (req, callback) => {
    Queries.deleteDogImage(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      }
    )
  },


  exports.getAllDogImages = (req, callback) => {
		Queries.getAllDogImages(
			req,
			(response) => {
				return callback({
					success: true,
					message: "All images of dog",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	}


