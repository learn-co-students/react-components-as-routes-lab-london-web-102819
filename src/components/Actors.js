import React from "react";
import { actors } from "../data";

const Actor = ({ name, movies }) => (
  <div>
    <h1> {name} </h1>
    <ul>
      {movies.map(movie => (
        <li> {movie}</li>
      ))}
    </ul>
  </div>
);

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
