import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';
import { updateDoc, doc, getFirestore } from 'firebase/firestore';
import app from "../../firebase";
const db = getFirestore(app);


//creamos la función para traer los datos de la fila seleccionada en un modal
const UserModal = ({show, setShow, modalUserData, tipo, data}) => {
    const handleClose = () => setShow(false);
    const [dataUser, setUserData] = useState([]); 

    const docRef = doc (db, `Users/${modalUserData.id}`);
    console.log(tipo)
    //creamos la funcion para actualizar los datos del modal
    const updateA = async (e) => {
    e.preventDefault()
    const phone = parseInt(dataUser)
   
    console.log(typeof(phone))
    await updateDoc(docRef, {
        phone: phone,

    });
    
      setUserData([]);
      handleClose();
    };

    
    return(
        <>
        <div>
        <Modal show={show} onHide={handleClose} key={modalUserData.id}>
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
    </>
    

    )
}

export default UserModal;