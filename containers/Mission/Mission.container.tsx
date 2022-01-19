import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getLaunch } from "../../graphql/queries";
import { Box, CircularProgress, Alert, Paper, Typography } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Ships } from "../../components/Ships";
import { Ship } from "../../components/Ships/Ships";

type Rocket = {
  rocket_type: string;
  rocket_name: string;
  rocket: {
    description: string;
  };
};

interface Mission {
  details: string | null;
  launch_date_local: string;
  launch_site: {
    site_name: string;
  };
  mission_name: string;
  rocket: Rocket;
  ships: Ship[];
}

const Mission: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [mission, setMission] = useState<Mission>();

  const { loading = true, error } = useQuery(getLaunch, {
    variables: { id },
    skip: !id,
    onCompleted: ({ launch }: { launch: Mission }) => setMission(launch),
  });

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Alert severity="error">{error.message}</Alert>
      </Box>
    );
  }

  return (
    <Box className="container">
      <Paper elevation={3} sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="overline" fontSize="1.5rem" component="h1">
            {mission?.mission_name}
          </Typography>
          <Box>
            <Typography
              fontSize=".85rem"
              display="flex"
              alignItems="center"
              variant="caption"
            >
              <DateRangeIcon />
              {mission?.launch_date_local}
            </Typography>
            <Typography
              fontSize=".85rem"
              display="flex"
              alignItems="center"
              variant="caption"
            >
              <LocationOnIcon />
              {mission?.launch_site.site_name}
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        {mission?.details && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              fontSize="1.3rem"
              fontWeight="bold"
              component="h4"
              mb={2}
              display="flex"
              alignItems="center"
            >
              <DescriptionIcon />
              Description
            </Typography>
            <Typography>{mission.details}</Typography>
          </Box>
        )}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            fontSize="1.3rem"
            fontWeight="bold"
            component="h4"
            mb={2}
            display="flex"
            alignItems="center"
          >
            <RocketLaunchIcon />
            Rocket
          </Typography>
          <Typography>
            <Typography component="span" fontWeight="bold">
              Rocket Name:
            </Typography>{" "}
            {mission?.rocket.rocket_name}
          </Typography>
          <Typography>
            <Typography component="span" fontWeight="bold">
              Rocket Type:
            </Typography>{" "}
            {mission?.rocket.rocket_type}
          </Typography>
          <Typography>
            <Typography component="span" fontWeight="bold">
              Rocket Description:
            </Typography>{" "}
            {mission?.rocket.rocket.description}
          </Typography>
        </Box>
      </Paper>
      <Ships ships={mission?.ships} />
    </Box>
  );
};

export default Mission;
