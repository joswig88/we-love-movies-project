const path = require("path");
require("dotenv").config();

const { PRODUCTION_DATABASE_URL } = process.env;

module.exports = {
  production: {
    client: "pg",
    connection: {
      connectionString: PRODUCTION_DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // For secure connections
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"), // Adjusted path for migrations
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"), // Adjusted path for seeds
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || "postgresql://postgres@localhost/postgres",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"), // Adjusted path for migrations
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"), // Adjusted path for seeds
    },
  },
};