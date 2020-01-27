import React from "react";
import { movies } from "../data";

const Movie = ({ title, time, genres }) => (
  <div>
    <h1>Name: {title}</h1>
    <h3>Time: {time}</h3>
    <ul>
      {genres.map(genre => (
        <li> {genre} </li>
      ))}
    </ul>
  </div>
);

const Movies = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1> Movies Page</h1>
      {movies.map(Movie)}
    </div>
  );
};

export default Movies;
