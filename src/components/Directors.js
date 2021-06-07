import React from 'react';
import { directors } from '../data';

const getKey = () => Math.floor(Math.random()*10000)

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map(director => (
          <div key={getKey()}>
            {director.name}
            <ul>{director.movies.map(movie => <li key={getKey()}>{movie}</li>)}</ul>
          </div>
        ))}
    </div>
  );
}

export default Directors
