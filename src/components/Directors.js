import React from "react";
import { directors } from "../data";
const Director = ({ name, movies }) => (
  <div>
    <h1> {name} </h1>
    <ul>
      {movies.map(movie => (
        <li> {movie}</li>
      ))}
    </ul>
  </div>
);

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1> Directors Page </h1>
      {directors.map(Director)}
    </div>
  );
};

export default Directors;
