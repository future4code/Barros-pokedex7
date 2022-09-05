import React from "react";
import {goToHome} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

const HeaderHome = styled.section`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  h1 {
  font-size: 6vh;
  }
`


function Pokedex() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const navigate = useNavigate()
  
    return (
      <div>
        <HeaderHome>
        <h1>Pokedex</h1>
        <h5>Veja os Pokemons Capturados:</h5>
        <Button onClick={()=> goToHome(navigate)} variant="contained">HOME</Button>
        </HeaderHome>
    
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
        <Grid container spacing={9}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image="https://www.kindpng.com/picc/m/9-97659_charmander-pikachu-gif-pokmon-pixel-art-pixel-art.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pokemon
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Capturar</Button>
                  <Button size="small">Detalhes</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </div>
    );
  }
  
  export default Pokedex;