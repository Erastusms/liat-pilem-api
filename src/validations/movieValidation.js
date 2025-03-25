const Joi = require("joi");

const movieSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  genre: Joi.string().min(3).max(100).required(),
  releaseDate: Joi.date().iso().required(),
  director: Joi.string().min(3).max(255).required(),
  rating: Joi.number().min(1).max(10).required(),
});


module.exports = { movieSchema };
