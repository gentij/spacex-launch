import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", cursor: "pointer" }}
            >
              SpaceX Launches
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
