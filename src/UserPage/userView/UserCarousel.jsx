import { collection, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import React, { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../Context/authContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

//import { Carousel } from "react-bootstrap";
//import img3 from "../../assets/lp_imgs/p3.jpg";
//import img4 from "../../assets/lp_imgs/p4.jpg";
//import img5 from "../../assets/lp_imgs/p5.jpg";

const UserCarousel = () => {
  const { user } = useAuth();
//Traer Eventos de DB
const [allEvents, setAllEvents] = useState([]);
useEffect(() => {
  const q = query(collection(db, "Events"));
  const unsub = onSnapshot(q, (snap) => {
    const getData = snap.docs.map((doc) => {
      return{
        id: doc.id,
        event: doc.get("event"),
        dateEvent: doc.get("date"),
      }
    })
    .slice()
    .sort((a, b) => b.dateEvent - a.dateEvent);
    setAllEvents([...getData])
  });
  return () => {
    unsub();
  };
}, []);
console.log(allEvents)

//Eliminar
const deletePost = async (id) => {
  //console.log(id);
  try {
    //Eliminar
    await deleteDoc(doc(db, 'Events', id));
    console.log('Document deleted with ID: ', id);

  } catch (error) {
    console.error('Error adding document: ', error);
  }
};




return(
  <div>
    {allEvents.map((event) => {
      return(


<div  style={{display: "flex", flexDirection: "column"}}>
        <Card key={event.id} style={{marginTop: "20px"}}>
        <CardMedia
          component="img"
          height="auto"
          image={event.event}
          alt="Evento"
        />
      </Card>
      {user.email === "crossftajuscoweb@gmail.com" || user.email === "axoscoyetizote@gmail.com" ? (
        <DeleteIcon
        onClick={() => deletePost(event.id)}
        style={{ cursor: 'pointer', color: '#FF6961', marginTop: "7px", rigth: 0, marginRigth: "0px"}}
      />
        ) : null}
</div>
    )})}
  </div>
)

};
export default UserCarousel;
