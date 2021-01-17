const Queries = require ("./query");



exports.getAllMotif =(req, callback) => {
    Queries.getAllMotif(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };

  exports.getAllVaccin = (req, callback) => {
    Queries.getAllVaccin(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };

