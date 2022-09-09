import React from "react";
import Card from '@mui/material/Card';


export function CardPokemon({img, name, types}){
    return(
        <Card className = {types[0].type.name}>
            <img src = {img} alt  = {name}/>
            <h2>{name}</h2>
            <p>{types[0].type.name}</p>
            <button> Capturar </button>
            <button> Detalhes </button>
        </Card>
    )
}