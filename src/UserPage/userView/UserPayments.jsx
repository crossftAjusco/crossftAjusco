import * as React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserView.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";

export const UserPayments = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  console.log(user.email)
  //console.log(users[0])

  const userData = users.filter( (us) => {
    if (us.email === user.email) return true
  })
  console.log(userData[0])

  //configuración de los hoocks para
  const uD = userData[0]
  const payIni = toString(uD.date_start)
  console.log(payIni)

  //Función para actualizar datos 
  
  return (
    
    <>        
      <div key={uD.id}>
        
        
    <h2 id="title">Mis Pagos</h2>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4} lg={12}>
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 435,
                  }}
                >
                  <h4>{uD.name} {uD.last_name}</h4>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Fecha de Inscripción:</th>
      <th>Último Pago</th>
      <th>Siguiente Fecha de Pago</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> {payIni} </td>
      <td> 9 Abril 2022 </td>
      <td> 9 Mayo 2022 </td>
    </tr>
  </tbody>

<br></br>
  <thead>
    <tr>
      <th>Realizar Pago #Cuenta:</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Banco Azteca: 09099093042343423 </td>
    </tr>
    <tr>
      <td> Banamex: 89235150985413098 </td>
    </tr>
  </tbody>
</Table>

                </Paper>
              </Grid>   
              
            </Grid>
          </Container>
        </Box>
        </div>
   
         
    </>
  )}; 
