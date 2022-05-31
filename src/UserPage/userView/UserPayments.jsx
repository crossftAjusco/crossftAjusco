import * as React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserView.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';



const UserPayments = () => {
  const { user, users } = useAuth(); //traemos y comparamos el id del usuario logueado
  const [open, setOpen] = React.useState(false); // Hook para desplegar Snackbar de copiado 
  const [open2, setOpen2] = React.useState(false); // Hook para abrir lista de pagos realizados
  //console.log(user.email)
  const userData = users.filter( (us) => { //Comprobamos el correo del usuario logueado
    if (us.email === user.email) 
    return true
  })
  //console.log(userData[0])
  const uD = userData[0] //Guardamos los datos del usuario a utilizar  
  //Función para copiar # de cuenta al portapapeles 
    const handleClick = () => {
      navigator.clipboard.writeText('072180003213100972')
    console.log('copy')
      setOpen(true);
    };
    //Función para cerrar el snackbar haciendo click 
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    //Creamos el fragmento de react del boton cerrar del snackbar
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
  
  return ( //Mostramos los pagos en una lista
    <>        
      <div className="title1">  
        <h2>Mis Pagos </h2>
      </div>   
        <Box sx={{ display: "flex" }}>
          <Container maxWidth="lg" className="cont1">
              <Paper className='paper1'
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column", 
                  }}
                  elevation={4}
                  >
                <List aria-label="contacts">
              <Paper elevation={4}>           
               <ListItem className="li">
                 <th>
                   Fecha de Inscripción
                 </th>
                 <td> 
                   {uD.date_start.toDate().toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                   })} 
                 </td>   
               </ListItem>
              </Paper>
             <Divider component="li" />
              <Paper elevation={4}>         
                <ListItem className="li1">  
                  <th>
                    Siguiente Fecha de Pago
                  </th>
                  <td> 
                    {uD.next_payday.toDate().toLocaleDateString("es-MX", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                            {console.log(uD.payment_days)}
                    </td>
                </ListItem>
              </Paper>  
              <Divider component="li" />
              <Paper elevation={4}>         
                <ListItem className="li2">
                   <th>
                     Último Pago Realizado 
                   </th>
                   <td> 
                     {uD.payment_days[Object.keys(uD.payment_days)[Object.keys(uD.payment_days).length -1]].toDate().toLocaleDateString("es-MX", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                   </td>
                </ListItem>
              </Paper>
            <Divider component="li" />
              <Paper elevation={4}>         
                <ListItem className="li2">
                    <th>
                      Pagos Realizados 
                    </th>
                    <td id="contPays"> 
                      {uD.payment_days.length} 
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen2(!open2)}
                        >
                      {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </td>
                  <Collapse in={open2} unmountOnExit>   
                    <tr> 
                      {uD.payment_days.map((pays) => (
                      <tr key={pays}> 
                        {pays.toDate().toLocaleDateString("es-MX", {
                           year: "numeric",
                           month: "long",
                           day: "numeric",
                         })}
                      </tr>
                       ))} 
                    </tr>
                  </Collapse>
                </ListItem>
             </Paper>
           <Divider component="li" />
             <Paper elevation={4}>         
                <ListItem className="li3">
                <th marginLeft="3px">
                  Cuenta Clabe
                </th>
                <td padding="2px">
                  072180003213100972
                </td>
                <td> 
                  <IconButton 
                      id="btnC"
                      size="large"
                      variant="contained" 
                      onClick={handleClick}
                      > 
                      <FileCopyIcon></FileCopyIcon> 
                  </IconButton>
                    <ThemeProvider>  
                       <Snackbar
                          color="neutral"
                          id="Snack"
                          autoHideDuration={3000}
                          open={open}
                          onClose={handleClose}
                          message="Copiado al portapapeles"
                          action={action}
                         />
                    </ThemeProvider>
                 </td>
               </ListItem>
                 <Paper elevation={4}>         
                   <ListItem className="li4">  
                     <p>
                        Puedes realizar tus pagos en efectivo de manera personal con tu coach,
                        o puedes hacer una transferencia bancaria a través del número de cuenta clabe
                     </p>
                   </ListItem>
                 </Paper>  
              </Paper>
            </List>
          </Paper>
        </Container>
      </Box> 
    </>
  )}; 

export default UserPayments; 