import "./UserView.css";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";

//import UserCarousel from "./UserCarousel.jsx";
//import ScrollableFeed from 'react-scrollable-feed'

export function UserTraining() {
  
  return (
    <div>
    <h2 id="title">Mi Entrenamiento</h2>
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
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Ejercicio</th>
      <th>Repeticiones</th>
      <th>¿Como se hace?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>BURPEES</td>
      <td>3 X 15 </td>
      <td><a href="https://fb.watch/cCsrKJAdM5/" target="_blank" rel="noopener noreferrer">ver video</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>SENTADILLAS</td>
      <td>3 x 30 </td>
      <td><a href="https://fb.watch/cCsrKJAdM5/" target="_blank" rel="noopener noreferrer">ver video</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>FONDOS</td>
      <td>3 x 20 </td>
      <td><a href="https://fb.watch/cCsrKJAdM5/" target="_blank" rel="noopener noreferrer">ver video</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td>LAGARTIJAS</td>
      <td>3 x 20 </td>
      <td><a href="https://fb.watch/cCsrKJAdM5/" target="_blank" rel="noopener noreferrer">ver video</a></td>
    </tr>
    <tr>
      <td>5</td>
      <td>DOMINADAS</td>
      <td>3 x 20 </td>
      <td><a href="https://fb.watch/cCsrKJAdM5/" target="_blank" rel="noopener noreferrer">ver video</a></td>
    </tr>
    <tr>
      <td>6</td>
      <td>DESPLANTES</td>
      <td>3 x 10 </td>
      <td><a href="https://fb.watch/cCsrKJAdM5/" target="_blank" rel="noopener noreferrer">ver video</a></td>
    </tr>
  </tbody>
</Table>

                </Paper>
              </Grid>   
            </Grid>
          </Container>
        </Box>
        </div>
   
  );
}
