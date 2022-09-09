import React from 'react';
import Router from './routes/Router';
import SearchAppBar from './components/Navbar/Navbar';
import GlobalState from './context/GlobalState';
import { CardPokemon } from './Screens/home/CardPokemon/Styled';


function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
