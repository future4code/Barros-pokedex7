import React from 'react'
import Router from './routes/Router'
import Heelloo from "./Heelloo"
import SearchAppBar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <SearchAppBar/>
      <Router />
      <Heelloo />
  
    </div>
  );
}

export default App;
