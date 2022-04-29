import "./UserView.css";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import UserCarousel from "./UserCarousel.jsx";
// import UserCarousel from "./UserCarousel.jsx";
import ScrollableFeed from 'react-scrollable-feed'

export function UserDash() {
  
  return (
    <div>
    <h2 id="title">Próximos Eventos</h2>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={8} lg={12}>
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 635,
                  }}
                >
                <ScrollableFeed>
                 <UserCarousel sx={{ height: 680 }} /> 
                </ScrollableFeed>
                </Paper>
              </Grid>   
              
            </Grid>
          </Container>
        </Box>
        </div>
   
  );
}
 