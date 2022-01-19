import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export interface LaunchesListItem {
  id: string;
  mission_name: string;
  launch_date_local: string;
  details: string;
  links: {
    flickr_images: string[];
  };
}

type Props = {
  launch: LaunchesListItem;
};

const LaunchCard: React.FC<Props> = ({ launch }) => {
  const {
    mission_name,
    launch_date_local,
    details,
    links: { flickr_images },
  } = launch;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={flickr_images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mission_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default LaunchCard;
