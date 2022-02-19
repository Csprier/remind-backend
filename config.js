// const env = process.dbcredentials.env;
// const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT } = require('./dbcredentials.env');

const config = {
  db: {
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST
  },
  listPerPage: 10,
};

module.exports = config;