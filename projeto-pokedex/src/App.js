import React from 'react';
import Router from './routes/Router';
import SearchAppBar from './components/Navbar/Navbar';
import { Card } from './components/CardPokemon/CardPokemon';


function App() {

  return (
    <div>
      <SearchAppBar/>
      <Router />
      <Heelloo />
  <Card></Card>
    </div>
  );
}

export default App;
