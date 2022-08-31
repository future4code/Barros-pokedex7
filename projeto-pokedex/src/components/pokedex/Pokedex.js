import React from "react";
import {goToHome} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";





function Pokedex() {
  const navigate = useNavigate()
    return (
      <div>
        <h1>POKEDEX</h1>
        <button onClick={()=> goToHome(navigate)}> GO TO HOME</button>
      </div>
    );
  }
  
  export default Pokedex;