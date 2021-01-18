import React from "react";
import MovieCard from "./MovieCard.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

function MovieList({ movieliste, searchInput, searchRatee }) {
  return searchInput === "" && searchRatee === 0
    ? movieliste.map((movie, i) => {
      console.log({movie})
        return (
          <Link
            to={`/${movie.title}/${movie.description}/${movie.trailer}`}
          >
            <MovieCard movieliste={movie} />
          </Link>
        );
      })
    : movieliste
        .filter((movie) =>
          searchInput
            ? movie.title.toUpperCase().includes(searchInput.toUpperCase())
            : movie.rate >= searchRatee
        )
        .map((movieliste, i) => <MovieCard movieliste={movieliste} />);
}

export default MovieList;
