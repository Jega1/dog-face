
const Queries = require ("./query");


exports.registerMedical = (req, callback) => {
    Queries.registerMedical(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      }
    )
  };


  exports.getAllVaccinsByDog = (req, callback) => {
		Queries.getAllVaccinsByDog(
			req,
			(response) => {
				return callback({
					success: true,
					message: "all vaccins of this dog",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	};

  exports.editMedical =(req, callback) => {

          Queries.editMedical(
      req,
      (response) => {
        return callback({ success: true, message: response });
      },
      (error) => {
        return callback({ success: false, message: error });
      }
    );



  };



  exports.delete =(req, callback) => {
    Queries.delete(
      req.params.id,
      (response) => {
        return callback({
          success: true,
          message: "user deleted",
          data: response,
        });
      },
      (error) => {
        return callback({ success: false, message: error });
      }
    );
  };

