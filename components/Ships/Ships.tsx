import {
  Alert,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import SailingIcon from "@mui/icons-material/Sailing";

export type Ship = {
  image: string;
  name: string;
  model: string;
};

type Props = {
  ships: Ship[] | undefined;
};

const Ships: React.FC<Props> = ({ ships }) => {
  if (!ships || !ships.length) {
    return <Alert severity="info">No info on ships</Alert>;
  }

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography
        variant="body2"
        fontSize="1.3rem"
        fontWeight="bold"
        component="h4"
        mb={2}
        display="flex"
        alignItems="center"
      >
        <SailingIcon />
        Ships
      </Typography>
      <Grid container spacing={3}>
        {ships.map((ship, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={ship.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ship.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ship.model}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Ships;
