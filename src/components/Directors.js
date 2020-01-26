import React from "react";
import { directors } from "../data";

const RenderDirectors = () =>
  directors.map(director => {
    return (
      <div>
        <h3>{director.name}</h3>
        {director.movies.map(movie => (
          <ul>
            <li>{movie}</li>
          </ul>
        ))}
      </div>
    );
  });

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {RenderDirectors()}
    </div>
  );
};

export default Directors;
