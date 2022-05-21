import * as React from "react";
import { useAuth } from "../../Context/authContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
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
    const { user } = useAuth();  // Hoock para comprobar la autenticación del usuario 
    const [ users, setUsers ] = useState({}); //Hoock para traer la data del usuario logueado
    const [tipo, setTipo] = useState('');
    const [data, setData] = useState({});
    const [modalUserData, setModalUserData] = useState({});
    const [show, setShow] = useState(false); //hoock para la ventana modal desactivada
    const handleShow = () => setShow(true);  //hoock para la ventana modal activada al dar click
  
  const handleClick = (e) => {
     //console.log('paso')
    setModalUserData ({
      
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
          //console.log(doc.id)
          info = doc.data()
          info.id = doc.id
          //console.log(info.id)
          return true
        }
      });
       //setUsers(info)
       console.log(info)     //Comprobamos que el objeto trae toda la data del usuario  
       console.log(info.phone)   // Comprobamos que se puede acceder a la key del objeto
       let filtArr = {
        phone: info.phone,          
        allergies: info.allergies,
        injuries: info.injuries,
        height: info.height,
        weight: info.weight,
        waist: info.waist,
        neck: info.neck,
      }
      console.log(filtArr) //Comprobamos que el nuevo objeto con la data a utilizar en el modal
      setUsers(filtArr)
    });
     return () =>  {
       unsub();
    };
  }, 
  []);

 
 
  
  console.log(users)
  
  
  return (
    <>
    <UserModal show={show} setShow={setShow} tipo={tipo} modalUserData={modalUserData} data={data} id="modal1" />  
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
                {  Object.keys(users).map((Key,i)=> {
                  return (
                    <ListItem> 
                     <ListItemText key={i} primary={[Key]} secondary={users[Key]} />
                        <Button key={users[i]} id="btn1" size="large" variant="success"
                        onClick={()=> {
                          handleClick()
                          setTipo([Key])
                          setData(users[Key])
                        }
                         } >
                          <ModeEditOutlineIcon/>
                        </Button>    
                    </ListItem>
                    )
                })
              }                
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