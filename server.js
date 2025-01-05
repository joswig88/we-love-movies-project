const app = require("./src/app");
const knex = require("./src/db/connection");

const PORT = process.env.PORT || 5000;

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("Migrations run successfully:", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error("Error running migrations:", error);
    process.exit(1); // Exit with failure
  });