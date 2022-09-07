import React from "react";


export function CardPokemon({img, name, types}){
    return(
        <CardContainer className = {types[0].type.name}>
            <img src = {img} alt  = {name}/>
            <h2>{name}</h2>
            <p>{types[0].type.name}</p>
            <button> add </button>
            <button> details </button>
        </CardContainer>
    )
}