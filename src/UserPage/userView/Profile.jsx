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
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import UserModal from "./UserModal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ScrollableFeed from 'react-scrollable-feed'
import "./UserProf.css";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, onSnapshot} from "firebase/firestore";
import app from "../../firebase";
const db = getFirestore(app);

const Profile = () => {
    const { user } = useAuth();
    const [ users, setUsers ] = useState({});
    const [tipo, setTipo] = useState('');
    const [data, setData] = useState('');
    const [modalUserData, setModalUserData] = useState({});
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    //hook state para guardar el array de data del users
  
  
  const handleClick = (e) => {
    console.log('paso')
    setModalUserData ({
      edad: user[0].age,
      teléfono: user[0].phone,
      email: user[0].email, 
      alergias: user[0].alergies,
      injuries: user[0].injuries,
      height: user[0].height,
      id: user[0].id
    }) 
    handleShow();
  }
  
 

 useEffect(() => {
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
    
       setUsers(info)
      
    });

     return () =>  {
       unsub();
       
    };
  }, []);

 
 
  
  console.log(users)
  
  
  return (
    <>
    <UserModal show={show} setShow={setShow} tipo={tipo} modalUserData={users} data={data} />  
    <div  key={modalUserData.id}>
    <div className="title1">
    <h2>Mi Perfil</h2>
    </div>  
        <Box sx={{ display: "flex" }}>
          <Container maxWidth="lg" className="cont1">
            <Grid container spacing={1}>
              <Grid item xs={12} md={4} lg={12}>
              <Paper className="paper1"
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 565,
                  }}
                >  
              <ScrollableFeed>             
              <List>
                <p>
                  Aquí puedes editar tus datos, si deseas cambiar algun otro dato como tu correo o 
                  contraseña contacta a tu coach.
                </p>
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
                  <Button id="btn1" size="large" variant="success"  onClick={()=> {
                    handleShow()
                    setTipo('Teléfono')
                    setData(users.phone)
                  }}onSelectEvent={handleClick} >
                    <ModeEditOutlineIcon/>
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
                  <Button id="btn1" size="large" variant="success" onClick={()=> {
                    handleShow()
                    setTipo('Alergias')
                    setData(users.allergies)
                  }}onSelectEvent={handleClick}>
                    <ModeEditOutlineIcon/>
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
                  <Button id="btn1" size="large" variant="success" onClick={()=> {
                    handleShow()
                    setTipo('Condición Médica')
                    setData(users.injuries)
                  }}onSelectEvent={handleClick}>
                    <ModeEditOutlineIcon/>
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
                  <ListItemText primary="Medidas"/>
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
                <ListItemText primary="Altura:" secondary={users.height} /> 
                <Button id="btn1" size="large" variant="success" onClick={()=> {
                    handleShow()
                    setTipo('Altura')
                    setData(users.height)
                  }}onSelectEvent={handleClick}>
                    <ModeEditOutlineIcon />
                  </Button>
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
                  <ListItemText primary="Peso" secondary={users.weight}  />
                  <Button id="btn1" size="large" variant="success" onClick={()=> {
                    handleShow()
                    setTipo('Peso')
                    setData(users.weight)
                  }}onSelectEvent={handleClick}>
                    <ModeEditOutlineIcon />
                  </Button>
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
                  <ListItemText primary="Cintura" secondary={users.waist}  />
                  <Button id="btn1" size="large" variant="success" onClick={()=> {
                    handleShow()
                    setTipo('Cintura')
                    setData(users.waist)
                  }}onSelectEvent={handleClick}>
                    <ModeEditOutlineIcon />
                  </Button>
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
                  <ListItemText primary="Cuello" secondary={users.neck}  />
                  <Button id="btn1" size="large" variant="success" onClick={()=> {
                    handleShow()
                    setTipo('Cuello')
                    setData(users.neck)
                  }}onSelectEvent={handleClick}>
                    <ModeEditOutlineIcon />
                  </Button>
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