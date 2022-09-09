import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


export default function PokemonCard({ name, image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt="green iguana" />
        <CardContent >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      <CardActions >
        <Button size="small">Capture</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}