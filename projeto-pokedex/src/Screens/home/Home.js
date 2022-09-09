
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
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;