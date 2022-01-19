import { useQuery } from "@apollo/client";
import { Alert, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { getLaunches } from "../../graphql/queries";
import { LaunchCard } from "../../components/LaunchCard";
import { LaunchesListItem } from "../../components/LaunchCard/LaunchCard";

const Home = () => {
  const [launches, setLaunches] = useState<LaunchesListItem[]>([]);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);

  const { loading, error, fetchMore } = useQuery(getLaunches, {
    variables: { offset: 0, limit: 6 },
    onCompleted: ({ launchesPast }: { launchesPast: LaunchesListItem[] }) =>
      setLaunches(launchesPast),
  });

  const handleFetchMore = async () => {
    setFetchMoreLoading(true);
    await fetchMore({
      variables: {
        offset: launches.length,
        limit: 6,
      },
    });
    setFetchMoreLoading(false);
  };

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
    <Box className="container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {launches.map((launch) => (
          <Grid key={launch.id} item xs={12} sm={6} md={4}>
            <LaunchCard launch={launch} />
          </Grid>
        ))}
      </Grid>
      <LoadingButton
        onClick={() => handleFetchMore()}
        loading={fetchMoreLoading}
        variant="contained"
        sx={{ my: 4 }}
      >
        Fetch More
      </LoadingButton>
    </Box>
  );
};

export default Home;
