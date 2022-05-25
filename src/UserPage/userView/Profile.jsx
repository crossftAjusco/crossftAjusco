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
    const { user } = useAuth();  // Hook para comprobar la autenticación del usuario 
    const [ users, setUsers ] = useState({}); //Hook para traer la data del usuario logueado
    const [tipo, setTipo] = useState('');  //Hook para guardar el tipo de dato del modal
    const [data, setData] = useState({});  //Hook guardar el dato del modal
    const [Key, setKey] = useState('');  //Hook para pasar el numero dinamico del tipo de dato en la lista renderizada 
    const [modalUserData, setModalUserData] = useState({}); // Hoock para guardar la data a ocupar en el modal de editar
    const [show, setShow] = useState(false); //Hook para la ventana modal desactivada
    const handleShow = () => setShow(true);  //Hook para la ventana modal activada al dar click
    const [userId, setId] = useState('') //Hook para guardar el id del usuario
  
  const handleClick = (e) => {
     console.log(users.phone)
    setModalUserData ({
      phone: users.phone,
      allergies: users.allergies,
      injuries: users.injuries,
      height: users.height,
      weight: users.weight,
      waist: users.waist,
      neck: users.neck,
    }) 
    console.log('paso2')
    
    console.log(user)
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
       setId(info.id)
       console.log(info)     //Comprobamos que el objeto trae toda la data del usuario  
       console.log(info.id)   // Comprobamos que se puede acceder a la key del objeto
       let filtArr = {
        phone: info.phone,          
        allergies: info.allergies,
        injuries: info.injuries,
        height: info.height,
        weight: info.weight,
        waist: info.waist,
        neck: info.neck
      }
      
      console.log(filtArr) //Comprobamos que el nuevo objeto con la data a utilizar en el modal
      setUsers(filtArr)
    });
     return () =>  {
       unsub();
    };
  },[]);

  console.log(users)
  
  return (
    <>
    <UserModal show={show} setShow={setShow} tipo={tipo} modalUserData={modalUserData} data={data} id={userId} keys={Key}/>  
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
                {Object.keys(users).map((item,index)=> {
                  const itemKey = `key-${index}`
                  //console.log(itemKey)
                  //console.log(typeof(itemKey))
                  return (
                    <ListItem> 
                     <ListItemText key={itemKey} primary={[item]} secondary={users[item]} />
                        <Button  id="btn1" size="large" variant="success"
                        onClick={()=> {
                          handleClick()
                          setKey(itemKey)
                          setTipo([item])
                          setData(users[item])
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