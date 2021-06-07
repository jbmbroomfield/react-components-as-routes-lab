import React from 'react';
import { movies } from '../data';

const getKey = () => Math.floor(Math.random()*10000)

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div key={getKey()}>
            {movie.title} ({movie.time} minutes)
            <ul>{movie.genres.map(genre => <li key={getKey()}>{genre}</li>)}</ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
