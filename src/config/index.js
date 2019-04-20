const Joi = require('joi');

require('dotenv').config();

const schema = Joi.object({
  NODE_ENV: Joi.string().required()
    .default('development')
    .allow(['development', 'test', 'production']),
  PORT: Joi.string().required().default(3000),
  HOST: Joi.string().required().default('0.0.0.0'),
  MONGO_URI: Joi.string().required(),
  ADMIN_SECRET: Joi.string().required(),
}).unknown(true);

const { error, value: config } = Joi.validate(process.env, schema);

if (error) {
  console.error('Missing property in config.', error.message);
  process.exit(1);
}

module.exports = config;
