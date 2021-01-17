const LessonQueries = require ("./query");




  exports.getAllStepsByIdLess = (req, callback) => {
    LessonQueries.getAllStepsByIdLess(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };
  exports.getAllLessons = (req, callback) => {
    LessonQueries.getAllLessons(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };



;
