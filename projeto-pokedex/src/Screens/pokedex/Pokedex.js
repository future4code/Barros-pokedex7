import React, {useContext} from "react";
import {goToHome} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import styled from "styled-components";
import GlobalStateContext from "../../context/GlobalContext";
import PokemonCard from "../home/CardPokemon/CardPokemon";
import { Skeletons } from "../home/skeletons/Skeletons";

const HeaderHome = styled.section`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  h1 {
  font-size: 6vh;
  }
`


function Pokedex() {

  const navigate = useNavigate()
  const { pokedex, setPokedex } = useContext(GlobalStateContext)

  const clickRemove = (creature) => {
    const pokedexIndex = pokedex.findIndex((item) => item.id === creature.id)
    const newPokedex = [...pokedex]

    newPokedex.splice(pokedexIndex, 1)
    
    setPokedex(newPokedex)
  }
  
    return (
      <div>
        <HeaderHome>
        <h1>Pokedex</h1>
        <h5>Veja os Pokemons Capturados:</h5>
        <Button onClick={()=> goToHome(navigate)} variant="contained">HOME</Button>
        </HeaderHome>
    
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={3}>
          {pokedex.length === 0 ? (
            <Skeletons />
          ) : (
            pokedex && pokedex.map((pokemons) => {
              return <Grid item xs={16} sm={6} md={4} lg={2}>
              <PokemonCard key={pokemons} pokemon={pokemons.data} />
              </Grid>
            }))}
        </Grid>
      </Container>
    </main>
    </div>
    );
  }
  
  export default Pokedex;