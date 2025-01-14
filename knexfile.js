const path = require("path");
require("dotenv").config();

const {
  DATABASE_URL = "postgresql://postgres:password@localhost/postgres",
  PRODUCTION_DATABASE_URL,
} = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
  },

  production: {
    client: "pg",
    connection: PRODUCTION_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
    pool: {
      min: 2,
      max: 10,
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