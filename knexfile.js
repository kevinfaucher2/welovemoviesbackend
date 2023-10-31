const path = require("path");

require("dotenv").config();

const {
   DATABASE_URL = "postgres://zajcenfq:oj6yQJ7Xe-b_69Z3ZfTk-PEq5ixWyepo@suleiman.db.elephantsql.com/zajcenfq",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://zajcenfq:oj6yQJ7Xe-b_69Z3ZfTk-PEq5ixWyepo@suleiman.db.elephantsql.com/zajcenfq",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
