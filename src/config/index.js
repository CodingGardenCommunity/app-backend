const Joi = require('joi');

require('dotenv').config();

const options = {
  NODE_ENV: Joi.string()
    .default('development')
    .allow(['development', 'test', 'production']),
  PORT: Joi.string().default(3000),
  HOST: Joi.string().default('0.0.0.0'),
  ADMIN_SECRET: Joi.string().required(),
};

if (process.env.NODE_ENV === 'test') {
  options.TEST_MONGO_URI = Joi.string().required();
} else {
  options.MONGO_URI = Joi.string().required();
}

const schema = Joi.object(options).unknown(true);

const { error, value: config } = Joi.validate(process.env, schema);

if (error) {
  // eslint-disable-next-line no-console
  console.error('Missing property in config.', error.message);
  process.exit(1);
}

module.exports = config;
