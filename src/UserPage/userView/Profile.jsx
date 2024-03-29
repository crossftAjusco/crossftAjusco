import * as React from "react";
import { useAuth } from "../../Context/authContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from 'react-bootstrap/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import UserModal from "./UserModal";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ScrollableFeed from 'react-scrollable-feed'
import "./UserProf.css";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";

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
    const [inf, setInfo] = useState({}) //Guardamos los datos del usuario en un nuevo hook para poder utilizarlo en los datos que no se pueden editar 
    const [titles, setTitle] = useState('');
    const itemTitle = ['Teléfono','Contacto de Emergencia','Condición','Enfermedades','Alergias', 'Altura (mts)', 'Peso (kg)', 'Cintura (cm)', 'Cuello (cm)', 'Cadera (cm)']//Arreglo para pintar dinamicamente los de los datos a editar
    
   //Función para abrir el modal al hacer click en el botón editar
  const handleClick = (e) => {
     //console.log(users.email)
    setModalUserData ({    //Pasamos a un objeto los datos a editar en el modal
      phone: users.phone,
      phone_contact: users.phone_contact,
      kind_of_injuries: users.kind_of_injuries,
      kind_of_ill: users.kind_of_ill,
      kind_of_allergies: users.kind_of_allergies,
      height: users.height,
      weight: users.weight,
      waist: users.waist,
      neck: users.neck,
      hip: users.hip,
    }) 
    //console.log('paso2')
    //console.log(user)
    handleShow();
  }
 
 useEffect(() => {
  let info = {} //guardamos en un arreglo la data del usuario traida de la base de datos
    const q = query(collection(db,"Users"));
    const unsub = onSnapshot(q, (snap) => {
      const array = snap.docs.filter((doc) => {
         if(user.email === doc.data().email) { //comprobamos el email del usuario logueado con el de la base de datos
          //console.log(doc.id)
          info = doc.data() //pasamos la data de la base de datos a una variable
          info.id = doc.id
          //console.log(info.id)
          return true
        }
      });
       setId(info.id) //guardamos el id del usuario en el hoock
       //console.log(info) 
       setInfo(info)  //guardamos la data del usuario en un hook  
       let objFilt = {
        phone: info.phone, 
        phone_contact: info.phone_contact, 
        kind_of_injuries: info.kind_of_injuries, 
        kind_of_ill: info.kind_of_ill,       
        kind_of_allergies: info.kind_of_allergies,
        height: info.height,
        weight: info.weight,
        waist: info.waist,
        neck: info.neck,
        hip: info.hip
      }
      console.log(objFilt) //Comprobamos que el nuevo objeto con la data a utilizar en el modal
      setUsers(objFilt) //Guardamos la data filtrada en un nuevo hook
    });
     return () =>  {
       unsub();
    };
  },[]);
  //console.log(inf)
  return (
    <>
    <div className="title3">
          <h2>
            Mi Perfil
          </h2>
        </div>  
      <UserModal show={show} setShow={setShow} tipo={tipo} titles={titles} modalUserData={modalUserData} data={data} id={userId} keys={Key} />  
        <Box sx={{ display: "flex" }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
              <Paper className="paper1" elevation={4}
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
                    Aquí puedes editar tus datos, si deseas cambiar algun otro dato como tu cumpleaños o email
                    contacta a tu coach
                  </p>
                <Divider component="li" />
                  {Object.keys(users,itemTitle).map((item,index)=> {
                   const itemKey = `key-${index}`
                     return (
                       <>
                         <Divider component="li" />
                          <Paper elevation={4} className="li5">
                           <ListItem className="li5">
                             <ListItemText
                               key={itemKey} 
                               className="list"
                               primary={itemTitle[index]}
                               secondary={users[item]} 
                               />
                               <Button id="btn1" 
                                  size="large" 
                                  variant="success"
                                  onClick={()=> {
                                    handleClick()
                                    setTitle(itemTitle[index])
                                    setKey(itemKey)
                                    setTipo(item)
                                    setData(users[item])
                                      }
                                    }
                                  >
                                <ModeEditOutlineIcon/>
                              </Button>    
                            </ListItem> 
                          </Paper>
                       </>
                      )
                    })}
                    <Divider component="li" />
                      <Paper elevation={4} className="li5">
                        <ListItem >
                          <ListItemText primary='Nombre' secondary={inf.name} className="list">
                          </ListItemText>
                        </ListItem> 
                      </Paper>
                    <Divider component="li" />
                      <Paper elevation={4} className="li5">
                        <ListItem >
                          <ListItemText primary='Apellido' secondary={inf.lastname} className="list">
                          </ListItemText>
                        </ListItem> 
                      </Paper>
                    <Divider component="li" />
                      <Paper elevation={4} className="li5">
                        <ListItem >
                          <ListItemText primary='Cumpleaños' secondary={inf.birthday} className="list">
                          </ListItemText>
                        </ListItem> 
                      </Paper>
                    <Divider component="li" />
                      <Paper elevation={4} className="li5">
                        <ListItem >
                          <ListItemText primary='Email' secondary={user.email} className="list">
                          </ListItemText>
                        </ListItem> 
                      </Paper>
                    </List> 
               </ScrollableFeed>   
             </Paper> 
           </Container>
         </Box>   
      
    </>
  );    
};
export default Profile; 