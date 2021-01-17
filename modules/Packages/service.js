const Queries = require("./query");



  exports.getAllPack = (req, callback) => {
    Queries.getAllPack(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };



  exports.getAllLessByIdPack = (req, callback) => {
    Queries.getAllLessByIdPack(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };




