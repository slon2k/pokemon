import React from 'react';
import './App.css';
import Search from "./Search";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

function App() {
  return (
    <div>
      <h2>App</h2>
        <Search/>
        <PokemonList/>
        <Pagination />
    </div>
  );
}

export default App;
