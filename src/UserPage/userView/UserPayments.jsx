import * as React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserView.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';






export const UserPayments = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  const [open, setOpen] = React.useState(false);
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
 
  //Función para copiar # de cuenta al portapapeles 
 

    const handleClick = () => {
      navigator.clipboard.writeText('072180003213100972')
    console.log('copy')
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  
    const action = (
      <React.Fragment >
        
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
  return (
    
    <>        
      <div key={uD.id}>
        
        
    <h2 id="title">Mis Pagos</h2>
      
        <CssBaseline />
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container rowSpacing={2} spacing={2}>
              <Grid item xs={12} align="center" className="grid1"> 
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column", 
                  }}
                  elevation={4}
                >
                  <Divider component="li" />
                <List 
      aria-label="contacts">
     <Paper elevation={1}>           
    <ListItem className="li">
    <Grid item xs={12} lg={9}>
      <th>Fecha de Inscripción: </th>
      <td> {uD.date_start.toDate().toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })} </td>   
      </Grid>
    </ListItem>
    </Paper>
    <Divider component="li" />
    <Paper elevation={2}>         
    <ListItem className="li1">  
      <Grid item xs={12} lg={9}>
      <th>Siguiente Fecha de Pago: </th>
      <td> {uD.next_payday.toDate().toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })} </td>
      </Grid>
      </ListItem>
      </Paper>  
      <Divider component="li" />
      <Paper elevation={3}>         
      <ListItem className="li2">
      <Grid item xs={12} lg={9}>
      <th>Pagos Realizados: </th>
      <td> {uD.payment_days.map((pays) => (
        <td key={pays}> 
         {pays.toDate().toLocaleDateString("es-MX", {
          year: "numeric",
          month: "long",
          day: "numeric",
          })}
          </td>
        ))} </td>
      </Grid>
      </ListItem>
      </Paper>
      <Divider component="li" />
      <Paper elevation={4}>         
      <ListItem className="li3">
      <Grid item xs={12} lg={9}>
      <th marginLeft="3px">Cuenta Clabe:</th>
      <td padding="2px">072180003213100972</td>
      <td> 
                  <IconButton 
                  size="large"
                  variant="contained" 
                  onClick={handleClick}> 
                  <FileCopyIcon >
                    </FileCopyIcon> </IconButton>
                  <Snackbar
                  className="Snack"
                  autoHidenDuration={3000}
                    open={open}
                    onClose={handleClose}
                    message="Copiado al portapapeles"
                    action={action}
                  />
                  </td>
      </Grid>
    </ListItem>
    <Divider component="li" />
    <Paper elevation={2}>         
    <ListItem className="li4">  
      <Grid item xs={12} lg={9}>
      <p>(Puedes realizar tus pagos en efectivo de manera personal con tu coach,
        o puedes hacer una transferencia bancaria a travéz del número de cuenta clabe)
      </p>
      
      </Grid>
      </ListItem>
      </Paper>  
              </Paper>
              </List>

              </Paper>
              </Grid>   
              
            </Grid>
            
          </Container>
        
        </div>
   
       
      
    </>
  )}; 

  