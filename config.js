const env = process.dbcredentials.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.POSTGRES_HOST || 'localhost',
    port: env.POSTGRES_PORT || '5432',
    user: env.POSTGRES_USER || 'wiz',
    password: env.POSTGRES_PASSWORD || 'wiz1337',
    database: env.POSTGRES_NAME || 'remind-db',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;