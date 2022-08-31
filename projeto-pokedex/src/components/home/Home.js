import React from "react";
import {goToPokedex} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";



function Home() {
  const navigate = useNavigate()
    return (
      <div>
        <h1>Home</h1>
        <button onClick={()=> goToPokedex(navigate)}> POKEDEX</button>
      </div>
    );
  }
  
  export default Home;