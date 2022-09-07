import React, {useState} from "react";
import GlobalStateContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Urls";

export default function GlobalState(props) {
    const data = useRequestData(`${BASE_URL}`)

    const [pokemon, setPokemon] = useState([])
    const dados = {
        pokemon,
        setPokemon,
        data
    }
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}