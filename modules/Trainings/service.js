const Queries = require ("./query");



exports.getAll = (req, callback) => {
		Queries.getAll(
			req,
			(response) => {
				return callback({
					success: true,
					message: "dogs and user of the dogs retrieve",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	};


	exports.registerTraining = (req, callback) => {
    Queries.registerTraining(
      req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      }
    )
	};


  exports.editTraining = (req, response) => {

  const dog = Queries.editTraining(req);

     return response({ success: true, message: "training details updated" });


  };

