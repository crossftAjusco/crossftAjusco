import * as React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserView.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ScrollableFeed from 'react-scrollable-feed'
import { useState } from "react";
import Reglamento from "../../assets/pdf/Reglamento.pdf"
import Button from '@mui/material/Button';

export const UserRules = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  console.log(user.email)
  //console.log(users[0])
  const style = {display: "block", margin: "auto", width: "100%", height: "100%"}

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
      
  const userData = users.filter( (us) => {
    if (us.email === user.email) return true
  })
  console.log(userData[0])

  //configuración de los hoocks para
  const uD = userData[0]

  //Función para actualizar datos 


  return (
    
      <>
    <h2 id="title">REGLAMENTO DE USUARIO</h2>
    <Box sx={{ display: "flex" }}>
        
         
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8} lg={12}>
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 935,
                  }}
                >
      
      <a target="_blanck" href={Reglamento}></a>
    <object data={Reglamento} style={style} label="pdf"></object>


      </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={12}>
      <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 435,
                  }}
                >
      
        
      

        <h3>{uD.name} {uD.last_name}</h3> 
        <h4>Este es mi reglamento de usuario:</h4>
        <ScrollableFeed>
        <div key={uD.id}>
        
          <p>
          Al momento de pertenecer a la comunidad de 'Cross FT Ajusco' hago constatar que he leído y entendido las normas presentadas en el 'Reglamento Interno de Cross FT Ajusco', por lo que acepto de conformidad cumplir con lo establecido en el mismo, así como con las instrucciones e indicaciones que emitan los instructores y/o monitores acargo. 

Así mismo, acepto las responsabilidades, derechos y obligaciones establecidos para las y los participantes de las actividades de 'Cross FT Ajusco' en la normatividad interna y externa que rige a la Institución.
</p>  

<th>Indicaciones Higiénicas y de Salud</th> 
<tr>• Por ser un espacio semi abierto,  y apegados a una recomendación de la OMS respecto al uso de cubrebocas y en las actividades deportivas, el uso de este queda a elección personal 
</tr>
<tr>• Notifica al entrenador lesiones o molestias</tr> 
<tr>• El uso de gel desinfectante así como la sanitizacion del equipo es obligatoria </tr>
<tr>• Trae una toalla pequeña </tr>
<tr>• Usa desodorante</tr>
<tr>• Ten buenos hábitos de higiene</tr> 

             
                </div> 
                </ScrollableFeed>  
                
                </Paper>
              </Grid>   
            </Grid>
          </Container>
        </Box>  
                  
    </>
  )}; 