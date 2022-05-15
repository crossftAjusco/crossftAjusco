import "./UserView.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import UserCarousel from "./UserCarousel.jsx";
// import UserCarousel from "./UserCarousel.jsx";
import ScrollableFeed from 'react-scrollable-feed'

export function UserDash() {
  
  return (
    <>
    <div className="title1">
    <h2>Próximos Eventos</h2>
    </div>
      <Box sx={{ display: "flex" }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={8} lg={12}>
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
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
        </>
   
  );
}
 
 