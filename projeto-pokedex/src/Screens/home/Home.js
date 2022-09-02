import React from "react";
import {goToPokedex} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import SearchAppBar from "../../components/Navbar/Navbar";



function Home() {
  const navigate = useNavigate()
    return (
      <div>
        <SearchAppBar />
        <h1>Home</h1>
        <button onClick={()=> goToPokedex(navigate)}>GO TO POKEDEX</button>
      </div>
    );
  }
  
  export default Home;