const { errorRes } = require("../helpers/responses");
const { failActionHandler } = require("../helpers/ValidationHelper");

const validator = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property]);
  const valid = error == null;
  if (valid) {
    next();
  } else {
    const errorDetails = failActionHandler(error);
    return errorRes(res, 422, "Show Error", errorDetails);
  }
};

module.exports = validator;
