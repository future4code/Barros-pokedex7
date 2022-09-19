import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { goToPokedex } from "../../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../../context/GlobalContext"


export default function PokemonCard({  pokemon }) {

  const navigate = useNavigate()

  const { pokedex, setPokedex } = useContext(GlobalStateContext)

  const addPokemon = (creature) => {
    const pokemonCaught = [...pokedex]

    pokemonCaught.push({ ...creature })

    setPokedex(pokemonCaught);

    goToPokedex(navigate)
  }

  const typeHandler = () => {
    if (pokemon.types[1]) {
      return pokemon.types[0].type.name + " | " + pokemon.types[1].type.name;
    }
    return pokemon.types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia component="img" height="200" image={pokemon.sprites.front_default} alt="green iguana" />
      <CardContent >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler()}
          </Typography>
        </Box>
      </CardContent>
    <CardActions >
      <button onClick={() => addPokemon(pokemon)}>Capture</button>
      <button size="small">Learn More</button>
    </CardActions>
    </CardActionArea>
    </Card>

  );
}

/*
 */