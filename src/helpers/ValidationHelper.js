const failActionHandler = (error) => {
  error.output = {
    status: false,
    error: ""
  };

  const err = error && error && error.details && error.details[0];
  const { context: { limit, key, valids } } = err;

  switch (err.type) {
    case "object.base":
      key === "value" ? error.output.error = "Payload can not be empty" : error.output.payload.error = `${key} must be an object`;
      break;
    case "any.required":
      error.output.error = `${err.path} is required`;
      break;
    case "date.base":
      error.output.error = `${err.path} must be valid date format`;
      break;
    case "number.min":
      error.output.error = `${err.path} has exceed or below the minimum value`;
      break;
    case "number.max":
      error.output.error = `${err.path} has exceed the maximum value`;
      break;
    case "number.base":
      error.output.error = `${err.path} must be valid number`;
      break;
    case "object.missing":
      error.output.error = "Please fill filter before search";
      break;
    case "date.min":
      error.output.error = "End Date must be greater or equal than Start Date";
      break;
    case "date.isoDate":
      error.output.error = `${err.path} must be valid ISO format`;
      break;
    case "string.min":
      error.output.error = `${key} length must be at least ${limit} characters`;
      break;
    case "string.max":
      error.output.error = `${key} length must be less than or equal to ${limit} characters`;
      break;
    case "any.empty":
      error.output.error = `${key} must be filled`;
      break;
    case "any.allowOnly":
      error.output.error = `${key} must be one of ${valids}`;
      break;
    case "array.base":
      error.output.error = `${key} must be an array`;
      break;
    case "boolean.base":
      error.output.error = `${key} must be a boolean`;
      break;
    case "object.allowUnknown":
      error.output.error = `${key} attribute is not allowed`;
      break;
    case "any.unknown":
      error.output.error = `${key} parameter must be empty`;
      break;
    case "string.alphanum":
      error.output.error = `${key} value is invalid`;
      break;
    case "string.regex.base":
      error.output.error = `${key} value is invalid`;
      break;
    default:
      console.log(err);
      error.output.error = err;
  }
  
  return error.output;
};

module.exports = {
  failActionHandler,
};
