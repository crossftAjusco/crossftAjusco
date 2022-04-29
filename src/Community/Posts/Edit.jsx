import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { db } from '../../firebase';
import {
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore';

export const Edit = ({ id, setPosts, avatar, closeMenu }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: '0px 5px 7px -7px',
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [inputToEdit, setInputToEdit] = useState('');
  const postsCollectionRef = collection(db, 'Posts');

  //Traer el documento a editar
  const getDocument = async (id) => {
    //console.log(id);
    //Obtener documento a través de su ID con get()
    const docRef = doc(db, 'Posts', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //console.log('Document data:', docSnap.data());
      //Pasar valores a form para editar
      await setInputToEdit(docSnap.data().input);
    } else {
      // doc.data() will be undefined in this case
      //console.log('No such document!');
    }
  };

  //Abrir modal y esperar al documento a editar
  const handleOpen = async () => {
    setOpen(true);
    await getDocument(id);
  };

  const handleSendEdit = async (e) => {
    e.preventDefault();
    //Modelar nuevo objeto
    let input = e.target.inputToEdit.value;
    //console.log('input: ', input);
    //Referencia a post
    const postRef = doc(db, 'Posts', id);
    //Actualizar nuevo input
    await updateDoc(postRef, {
      input: input,
    })
      .then(() => {
        //console.log('Documento actualizado'); // Documento actualizado
      })
      .catch((error) => {
        //console.error('Error de actualización de doumento', error);
      });
    //Actualizar DOM con nuevos cambios
    await getAllData();
    //Limpiar estado del input
    setInputToEdit('');
    //Cerrar modal y Menú EditDelete
    handleClose();
  };

  //Traer nueva data actualizada
  const getAllData = async () => {
    //console.log('getting data');
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

  const handleClose = () => {
    //Cerrar Modal
    setOpen(false);
    //Cerrar Menú EditDelete
    closeMenu();
  };

  return (
    <div>
      <EditIcon
        onClick={handleOpen}
        style={{
          cursor: 'pointer',
          color: '#00AAE4',
          position: 'relative',
          fontSize: 'large',
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            aria-label="recipe"
            src={avatar}
            sx={{ marginBottom: '5%' }}
          ></Avatar>
          <form onSubmit={handleSendEdit}>
            <FloatingLabel
              controlId="floatingTextarea1  "
              label="¡Edita tu post!"
              style={{ color: 'gray' }}
            >
              <Form.Control
                as="textarea"
                style={{
                  height: '30vh',
                  borderColor: '#5DADE2',
                }}
                type="text"
                name="inputToEdit"
                defaultValue={inputToEdit}
                autoFocus
              />
            </FloatingLabel>

            <button
              type="submit"
              style={{
                background: 'transparent',
                borderStyle: 'none',
                float: 'right',
                marginTop: '5%',
              }}
            >
              <CheckCircleIcon
              color="primary"
                sx={{
                  fontSize: '35px',
                  boxShadow: '0px 5px 7px -7px',
                }}
              />
            </button>
          </form>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: '100%', marginTop: '10%', color: 'lightgray' }}
          >
            <small>&copy; CrossFt Ajusco</small>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
