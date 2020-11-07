import React from 'react';
import{ MovieContext} from "./MovieContext"
import './App.css';
import MovieList from './MovieList';
import ChangeContext from "./ChangeContext"
import NavBar from "./NavBar"
function App() {
  return (
   <MovieContext>
      <NavBar/>
      <ChangeContext/>
      <MovieList/>
   </MovieContext>
    );
}

export default App;