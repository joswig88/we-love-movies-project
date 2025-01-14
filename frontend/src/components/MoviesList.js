import React, { useState, useEffect } from "react";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/movies`)
      .then((response) => response.json())
      .then((data) => setMovies(data.data || []))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;