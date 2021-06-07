import React from 'react';
import { actors } from '../data';

const getKey = () => Math.floor(Math.random()*10000)

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {actors.map(actor => (
          <div key={getKey()}>
            {actor.name}
            <ul>{actor.movies.map(movie => <li key={getKey()}>{movie}</li>)}</ul>
          </div>
        ))}
    </div>
  );
};

export default Actors;
