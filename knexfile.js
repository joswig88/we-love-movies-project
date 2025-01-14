const path = require("path");
require("dotenv").config();

const { PRODUCTION_DATABASE_URL } = process.env;

module.exports = {
  production: {
    client: "pg",
    connection: {
      connectionString: PRODUCTION_DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Add SSL if required
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"), // Corrected path to migrations
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"), // Corrected path to seeds
    },
    pool: {
      min: 2,
      max: 10, // For production database pooling
    },
  },
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || "postgresql://postgres:Zdy1b4Ehv7pCrQkm@hospitably-paramount-turaco.data-1.use1.tembo.io:5432/postgres", // Default fallback for local dev
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
  },
};