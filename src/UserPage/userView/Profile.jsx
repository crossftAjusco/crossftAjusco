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
    const [ users, setUsers ] = useState([]);
    const [tipo, setTipo] = useState('');
    const [data, setData] = useState('');
    const [modalUserData, setModalUserData] = useState({});
    const [show, setShow] = useState(false); //hoock para la ventana modal desactivada
    const handleShow = () => setShow(true);  //hoock para la ventana modal activada
  
  const handleClick = (e) => {
     //console.log('paso')
    
    setModalUserData ({
      teléfono: user[0].phone,
      email: user[0].email, 
      alergias: user[0].alergies,
      injuries: user[0].injuries,
      height: user[0].height,
      id: user[0].id
    }) 
    console.log('paso2')
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
    <div>
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
                  <ListItemText  primary="Teléfono:" secondary={users.phone} />
                  <Button id="btn1" size="large" variant="success"  
                  onClick={()=> {
                    handleClick()
                    setTipo('Teléfono')
                    setData(users.phone)
                  }}> 
                    <ModeEditOutlineIcon/>
                  </Button>
                </ListItem>
                <Divider component="li" />    
                <ListItem>
                  <ListItemText primary="Alergias:" secondary={users.allergies} />
                  <Button id="btn1" size="large" variant="success"  
                  onClick={()=> {
                    handleClick()
                    setTipo('Alergias')
                    setData(users.allergies)
                  }}>
                    <ModeEditOutlineIcon/>
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