const Queries = require("./query");



exports.getAllVet = (req, callback) => {
  Queries.getAllVet(req, (response) => {
                console.log(response);
					return callback({
					success: true,
					message: "All vetos",
					data: response,
				});
				},
					(error) => {
				return callback({ success: false, message: error });
			}
		);
	};




  exports.getHoursByVet = (req, callback) => {
		Queries.getHoursByVet(req,(response) => {
				return callback({
					success: true,
					message: "All availabilities of this vet",
					data: response,
				});
			},
			(error) => {
				return callback({ success: false, message: error });
			}
		);
	};

  exports.takeAppointment = (req, callback) => {
    // console.log("Appoint Data : ", req.body);
    Queries.takeAppointment(
      req.body,
      (response) => {
        return callback({ success: true, message: response });
      },
      (error) => {
        return callback({ success: false, message: error });
      }
    );
  };

  exports.cancelAppointment = (req, callback) => {
    Queries.cancelAppointment(
      req.body,
      (response) => {
        return callback({ success: true, message: response });
      },
      (error) => {
        return callback({ success: false, message: error });
      }
    );
  };

