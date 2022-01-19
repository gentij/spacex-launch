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
    links: { flickr_images },
  } = launch;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          flickr_images[0] ||
          "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
        }
        sx={{ background: "#999" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mission_name}
        </Typography>
        <Typography mb={2} variant="body2" color="text.secondary">
          {launch_date_local}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default LaunchCard;
