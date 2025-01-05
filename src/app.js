require("dotenv").config(); // Always load environment variables at the top

const express = require("express");
const cors = require("cors");

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome! You can access the data using these routes: /movies, /reviews, /theaters, /reviews/:reviewId, /movies/:movieId, /movies/:movieId/theaters, and /movies/:movieId/reviews.",
  });
});

// Routers
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

// 404 Handler
app.use((req, res, next) => {
  next({ status: 404, message: "That page doesn't exist." });
});

// Error Handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong on our end!" } = err;
  res.status(status).json({ error: message });
});

module.exports = app;