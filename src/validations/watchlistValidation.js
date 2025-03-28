const Joi = require("joi");

const watchlistSchema = Joi.object({
  movieId: Joi.string().required(),
  status: Joi.string().valid("planned", "watching", "completed").required(),
});

module.exports = { watchlistSchema };
