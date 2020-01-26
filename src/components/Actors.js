import React from "react";
import { actors } from "../data";

const RenderActors = () =>
  actors.map(actor => {
    return (
      <div>
        <h3>{actor.name}</h3>
        {actor.movies.map(movie => (
          <ul>
            <li>{movie}</li>
          </ul>
        ))}
      </div>
    );
  });

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {RenderActors()}
    </div>
  );
};

export default Actors;
