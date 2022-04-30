import * as React from "react";
import { useAuth } from "../../Context/authContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import StraightenIcon from '@mui/icons-material/Straighten';
import Button from 'react-bootstrap/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UserModal from "./UserModal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ScrollableFeed from 'react-scrollable-feed'
import "./UserView.css";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, onSnapshot} from "firebase/firestore";


import app from "../../firebase";
const db = getFirestore(app);

 const Profile = () => {
  const { user } = useAuth();
  // Traemos el id del usuario desde useAuth 
    const [ users, setUsers ] = useState({});
    const [tipo, setTipo] = useState('');
    const  [data, setData] = useState('');
    const [modalUserData, setModalUserData] = useState({});
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
  
  const handleClick = (e) => {
    console.log('paso')
    setModalUserData ({
      edad: user[0].age,
      teléfono: user[0].phone,
      email: user[0].email, 
      alergias: user[0].alergies,
      injuries: user[0].injuries,
      id: user[0].id
    }) 
    handleShow();
  }

  useEffect(() =>{
    let info = {}
    const q = query(collection(db,"Users"));
    const unsub = onSnapshot(q, (snap) => {
      const array = snap.docs.filter((doc) => {
        if(user.email === doc.data().email) {
          console.log(doc.id)
          info = doc.data()
          info.id = doc.id
          console.log(doc.id)

          return true
        }
      });
      console.log(info)
      setUsers(info)
    });
    return () => {
      unsub();
    };
  }, []);
  console.log(users)
 

  
  //creamos la funcion para actualizar los datos
  
  //creamos la función para traer los datos de la filaseleccionada

  //mostramos en pantalla los datos del usuario  
  return (
    <>
          <UserModal show={show} setShow={setShow}  tipo={tipo} modalUserData={users} data={data} />
          
    <div key={modalUserData.id} style={{ height: 200, margin: "10px", padding:"5px" }}>
    <h2 id="title">Mi Perfil</h2>
    <h4 id="subtitle">
          {users.name} {users.last_name}
        </h4>
        
        <Box sx={{ display: "flex" }}>
        <CssBaseline />
          <Container maxWidth="lg" sx={{ mt: 6, mb: 5 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={12}>
              <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 635,
                  }}
                >  
              <ScrollableFeed>             
              <List
                sx={{
                  width: '100%',
                  maxWidth: 960,
                  bgcolor: 'background.paper',
                }}
              >
                
                <ListItem>
                  <ListItemText primary="Edad:" secondary={users.age}/>
                  <Button 
                  variant="primary" 
                  onClick={()=> {
                    handleShow()
                    setTipo('Edad:')
                    setData(users.age)
                    
                  }} 
                    onSelectEvent={handleClick}>
                    <EditOutlinedIcon />
                    
                  </Button>
                </ListItem>
                <Divider component="li" />
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemText primary="Teléfono:" secondary={users.phone} />
                  <Button variant="primary" onClick={()=> {
                    handleShow()
                    setTipo('Teléfono')
                    setData(users.phone)
                  }}onSelectEvent={handleClick} >
                    <EditOutlinedIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemText primary="Email:" secondary={users.email} />
                  <Button variant="primary" onClick={()=> {
                    handleShow()
                    setTipo('Emial')
                    setData(users.email)
                  }}onSelectEvent={handleClick}>
                    <EditOutlinedIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemText primary="Alergias:" secondary={users.allergies} />
                  <Button variant="primary" onClick={()=> {
                    handleShow()
                    setTipo('Alergias')
                    setData(users.allergies)
                  }}onSelectEvent={handleClick}>
                    <EditOutlinedIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                  <ListItem>
                  <ListItemText primary="Condición médica:" secondary={users.injuries} />
                  <Button variant="primary" onClick={()=> {
                    handleShow()
                    setTipo('Condición Médica')
                    setData(users.injuries)
                  }}onSelectEvent={handleClick}>
                    <EditOutlinedIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                </li>
                <ListItem>
                  <ListItemText primary="Medidas:"/>
                </ListItem>
                <Divider component="li" variant="inset" />
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 9 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <StraightenIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Altura:" secondary={users.sizes['height']} />
                </ListItem>
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 9 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <StraightenIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Peso" secondary={users.sizes['weight']} />
                </ListItem>
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 9 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <StraightenIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Cintura" secondary={users.sizes['waist']} />
                </ListItem>
                <li>
                  <Typography
                    sx={{ mt: 0.5, ml: 9 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                  </Typography>
                </li>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <StraightenIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Cuello" secondary={users.sizes['neck']} />
                </ListItem>
              </List> 
            </ScrollableFeed>   
            </Paper> 
          </Grid>
          </Grid>
        </Container>
        </Box>   
        </div>
    </>
  );    
};
export default Profile; 


