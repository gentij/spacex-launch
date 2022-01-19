import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { LaunchesListItem } from "../../components/LaunchCard/LaunchCard";
import { getLaunch } from "../../graphql/queries";
import { Box, CircularProgress, Alert } from "@mui/material";

const Mission: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [mission, setMission] = useState();

  const { loading = true, error } = useQuery(getLaunch, {
    variables: { id },
    skip: !id,
    onCompleted: ({ launch }) => setMission(launch),
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
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div>
      <h1>hej</h1>
    </div>
  );
};

export default Mission;
