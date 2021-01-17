const LessonServices = require ("./service");


exports.getAllStepsByIdLess = (req, res) => {
    LessonServices.getAllStepsByIdLess(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };

  exports.getAllLessons = (req, res) => {
    LessonServices.getAllLessons(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };

