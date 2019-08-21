const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: dbPath },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './database/seeds' },
    // by default SQLite will not enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // enforce FK
      }
    }
  },
  testing: {
    client: 'pg',
    connection: localPgTest,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations'
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
// Update with your config settings.

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
    connection: { database: 'testing_postgres' },
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
