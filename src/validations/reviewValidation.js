const Joi = require("joi");

const reviewSchema = Joi.object({
  rating: Joi.number().integer().min(1).max(10).required(),
  comment: Joi.string().max(500).allow("").optional(),
});

module.exports = { reviewSchema };
