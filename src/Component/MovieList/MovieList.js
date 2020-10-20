import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard.js";
import "./MovieList.css";

function MovieList({ Movielist, searchTerm, rating }) {
  return (
    <div className="MovieList">
      {Movielist.filter(
        (el) =>
          el.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          el.rating >= rating
      ).map((el, index) => (
        <div key={index}>
          <MovieCard
            name={el.name}
            rating={el.rating}
            src={el.src}
            description={el.description}
          />
        </div>
      ))}
    </div>
  );
}
export default MovieList;
