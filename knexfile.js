// Update with your config settings.
const productionDbConnection = process.env.DATABASE_URL || {
  filename: './data/projects.db3'
};

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  testing: {
    client: 'pg',
    connection: { filename: './data/testing_projects.db3' },
    migrations: {
      directory: './database/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: productionDbConnection, // could be an object or a string
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
