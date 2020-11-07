import React from 'react';
import{ MovieContext} from "./MovieContext"
import './App.css';
import MovieList from './MovieList';
import ChangeContext from "./ChangeContext"
function App() {
  return (
   <MovieContext>
      <ChangeContext/>
      <MovieList/>
   </MovieContext>
    );
}

export default App;