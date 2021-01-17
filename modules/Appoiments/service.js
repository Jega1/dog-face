const Queries = require("./query");





exports.getAppointsByVet = (req, callback) => {
		Queries.getAppointsByVet(req,(response) => {
				return callback({
					success: true,
					message: "All appointments",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	};


  exports.getAppointsByUser = (req, callback) => {
		Queries.getAppointsByUser(req,(response) => {
				return callback({
					success: true,
					message: "All appointments",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	};



