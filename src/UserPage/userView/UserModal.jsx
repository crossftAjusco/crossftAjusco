import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';
import { updateDoc, doc, getFirestore, } from 'firebase/firestore';
import app from "../../firebase";
const db = getFirestore(app);


//creamos la función para traer los datos de la fila seleccionada en un modal
const UserModal = ({show, setShow, modalUserData, tipo, data, id, keys}) => {
    const handleClose = () => setShow(false);
    const [dataUser, setUserData] = useState({}); 
    const [dataUser2, setUserData2] = useState(''); 

    console.log(tipo)
    console.log(keys)
    //creamos la funcion para actualizar los datos del modal
    const updateA = async (e) => {
    e.preventDefault()
    console.log(modalUserData.phone)
    const docRef = doc (db, `Users/${id}`);

    console.log(id)
    console.log(docRef)
    await updateDoc(docRef, {
       phone: dataUser,

    });
      setUserData({});      
      handleClose();
    };

    const updateB = async (e) => {
      e.preventDefault()
      console.log(modalUserData.allergies)
      const docRef = doc (db, `Users/${id}`);
  
      console.log(id)
      console.log(docRef)
      await updateDoc(docRef, {
         allergies: dataUser2
      });
        
        setUserData2('');
        handleClose();
      };


    
    return(
        <>
        <div >
        <Modal show={show} onHide={handleClose} key={keys='key-0'}>
      <Modal.Header>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group className="mb-3" >
            <Form.Label>{tipo}</Form.Label>
            <Form.Control
              placeholder={data}
              autoFocus 
              onChange={(e) => setUserData (e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={updateA} type="submit" >
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
    </div>


    <div>
        <Modal show={show} onHide={handleClose} key={keys='key-1'}>
      <Modal.Header>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group className="mb-3" >
            <Form.Label>{tipo}</Form.Label>
            <Form.Control
              placeholder={data}
              autoFocus 
              onChange={(e) => setUserData2 (e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={updateB} type="submit" >
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    </>
    

    )
}

export default UserModal;