const Joi = require("joi");

const movieSchema = Joi.object({
  director: Joi.string().min(1).max(100).required(),
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().min(3).max(100).required(),
  releaseDate: Joi.date().iso().required(),
  duration: Joi.number().min(1).required(),
  rating: Joi.number().max(10).required(),
  categories: Joi.array().items(Joi.number().optional()),
});

module.exports = { movieSchema };
