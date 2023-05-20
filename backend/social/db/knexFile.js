const { Model } = require('objection');
const Knex = require('knex');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'postgres',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'social',
    },
    migrations: {
      directory: './migrations',
    },
  },
};

