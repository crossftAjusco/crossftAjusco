import { useAuth } from '../../Context/authContext';
import "./UserView.css";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UserCarousel from "./UserCarousel.jsx";
// import UserCarousel from "./UserCarousel.jsx";
import ScrollableFeed from 'react-scrollable-feed'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebase"
import Button from '@mui/material/Button';
import { AdPicture } from "../../Community/Posts/AdPicture"


export function UserDash() {
  const { user } = useAuth();
  const [event, setEvent] = useState('');

  //Cargar imagen de evento
  const handleEvent = async(e) => {
    const localEvent = e.target.files[0]
    console.log(localEvent)
    const archRef = ref(storage, `filesCommunity/${localEvent.name}`)
    await uploadBytes(archRef, localEvent)
    const urlEvent = await getDownloadURL(archRef)
    await setEvent(urlEvent)
  }

  //Subir Evento a DB
  const submitEvent = async (e) => {
    e.preventDefault()
    console.log("event: ", event)
    try {
      const docRef = await addDoc(collection(db, "Events"), {
        event: event,
        date: new Date()
      });
      //console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      //console.error('Error adding document: ', e);
    }
  }
  return (
    <>
     <div className="title3">
    <h2>Próximos Eventos</h2>
    </div>
      <Box sx={{ display: "flex" }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
                <ScrollableFeed>
                  <UserCarousel sx={{ height: "auto" }} /> 
                </ScrollableFeed>
          </Container>
        </Box>
          {user.email === "crossftajuscoweb@gmail.com" || user.email === "axoscoyetizote@gmail.com" ? (
          <form onSubmit={submitEvent} style={{display: "flex", flexDirection: "row", justifyContent:"flex-end"}}>
          <AdPicture setFile={setEvent}/>
            <button
              style={{
              backgroundColor: "transparent",
              borderStyle: "none",
              marginTop: "12px"
              }}>
              <Button variant="primary">Crear Evento</Button>
            </button>
    </form>) : null }
  </>
  );
};