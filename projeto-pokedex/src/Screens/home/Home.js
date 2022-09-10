import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import PokemonCard from "./CardPokemon/CardPokemon";
import { Skeletons } from "./skeletons/Skeletons";


 const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    let filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };



  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons && pokemons.map((pokemons) => {
              return <Grid item xs={16} sm={6} md={4} lg={2}>
              <PokemonCard key={pokemons} pokemon={pokemons.data} />
              </Grid>
            }))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;