const app = require("./src/app");
const knex = require("./src/db/connection");

const port = process.env.PORT || 4000; // Use Render's provided PORT or fallback to 5000

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("Migrations run successfully:", migrations);
    app.listen(PORT, listener); // Ensure the app is listening on PORT
  })
  .catch((error) => {
    console.error("Error running migrations:", error);
    process.exit(1);
  });