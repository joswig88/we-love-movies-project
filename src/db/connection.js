const environment = process.env.NODE_ENV || "development";
// Correctly require the knexfile using a relative path
const config = require("../../knexfile")[environment];
// Bring in knex and pass the configuration
const knex = require("knex")(config);

module.exports = knex;