import React, {useState} from "react";
import GlobalStateContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Urls";

export default function GlobalState(props) {
    const data = useRequestData(`https://pokeapi.co/api/v2/pokemon?limit=100`)

    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    const dados = {
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        data
    }
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}