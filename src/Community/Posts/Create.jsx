import React, { useState } from 'react';
import { useAuth } from '../../Context/authContext';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AdPhoto } from './AdPhoto';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AdPicture } from "./AdPicture"
import { AdWebSite } from "./AdWebSite" 
import CloseIcon from '@mui/icons-material/Close';

export const CreatePost = ({ setPosts }) => {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');

  const postsCollectionRef = collection(db, 'Posts');
  //console.log(url, file)

  const handleChange = (e) => {
    //console.log(e.target.name);
    setInput(e.target.value);
    //console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();

    //console.log(input, user.email, user.displayName, date, user.photoURL, file, url);
    //mandar values a objeto en firestore
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        input: input,
        email: user.email,
        date: date,
        author: user.displayName,
        avatar: user.photoURL,
        file: file,
        url: url,
      });
      //console.log('Document written with ID: ', docRef.id);
      //Limpiar form
      setInput(e.target.name=""); 
      setFile("")
      setUrl("")
      //Actualizar estado
      getAllData();
    } catch (e) {
      //console.error('Error adding document: ', e);
      //Limpiar Form
      setInput(e.target.name="");
      setFile("")
      setUrl("")
    }
  };

  //Traer nueva data actualizada
  const getAllData = async () => {
    const data = await getDocs(postsCollectionRef);
    //Recuperar nueva data
    const getData = data.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
        fecha: doc.data().date.toDate().toDateString(),
        hora: doc.data().date.toDate().getHours(),
        minutes: doc.data().date.toDate().getMinutes(),
      }))
      .slice()
      .sort((a, b) => b.date - a.date);
    //console.log(getData);
    //Actualizar Estado
    setPosts(getData);
  };

  // Agregamos un input desde donde el usuario puede escribir sus mensajes
  return (
    <div>
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: '7px',
          boxShadow: '0px 5px 7px -7px',
          padding: '1%',
        }}
      >
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingTextarea1"
            label="¡Comparte con la comunidad!"
            style={{ color: 'gray' }}
          >
            <Form.Control
              as="textarea"
              style={{
                height: '100px',
                borderColor: '#5DADE2',
              }}
              name="entry"
              type="text"
              placeholder="¡Comparte con la comunidad!"
              onChange={handleChange}
              value={input}
              autoFocus
            />
            </FloatingLabel>
          <div style={{ display: 'flex', flexDirection: 'raw' }}>  
            <AdPicture setFile={ setFile }/>
            {/*<AdPhoto />*/}
            <AdWebSite setUrl={ setUrl }/>
          </div>
          <div>
          { url ? (<div style={{backgroundColor: "lightGreen", fontSize:"12px", textAlign:"center", marginBottom: "5px"}}>
            <button style={{borderStyle: "none", float: "right", backgroundColor: "transparent", marginRight: "5px", marginBottom: "2px"}} onClick={()=> setUrl("")}>
              <CloseIcon sx={{fontSize: 14 }}/>
            </button>Link cargado</div>) : null}

          { file ? (<div style={{backgroundColor: "lightBlue", display: "block", fontSize:"12px", textAlign:"center" }}>
            <button style={{borderStyle: "none", display: "block", float: "right", backgroundColor: "transparent", marginRight: "3px", marginBottom: "2px"}} onClick={()=> setFile("")}>
              <CloseIcon sx={{fontSize: 15 }}/>
            </button>Archivo cargado</div>) : null}
          </div>
          {input  === '' & file === '' ? null : (
            <div>
              <button
                style={{
                  background: 'transparent',
                  borderStyle: 'none',
                  float: 'right',
                  padding: '10px',
                  position: 'relative',
                }}
              >
                <Fab color="primary" aria-label="add" size="small">
                  <AddIcon />
                </Fab>
              </button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};