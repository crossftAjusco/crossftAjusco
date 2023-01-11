import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase";

//creamos la función para traer los datos del usuario por medio de props
const UserModal = ({show, setShow, tipo, data, id, keys, titles}) => {
    const handleClose = () => setShow(false);
    const [dataUser, setUserData] = useState({});
    const [name, setUserData2] = useState({});
    //creamos la funcion para actualizar los datos del modal
    const updateA = async (e) => {
    e.preventDefault()
    //console.log(modalUserData.phone)
    const docRef = doc (db, `Users/${id}`);
    console.log(name)
    await updateDoc(docRef, {
       [tipo]: dataUser,
    });
      setUserData({}); 
      setUserData2(({
        phone: e.target.values,
        phone_contact: e.target.values,
        kind_of_injuries: e.target.values,
        kind_of_ill: e.target.values,
        kind_of_allergies: e.target.values,
        height: e.target.values,
        weight: e.target.values,
        waist: e.target.values,
        neck: e.target.values,
        hip: e.target.values
      }))
      handleClose();
      alert('Actualizado correctamente')
    };
    //console.log (tipo)
    return(
      <>
        <div>
        <Modal show={show} onHide={handleClose} key={keys}>
          <Modal.Header>
            <Modal.Title>Cambiar Datos:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
             <Form.Group className="mb-3" >
               <Form.Label>{titles}</Form.Label>
               <Form.Control
                  name={tipo}
                  placeholder={data}
                  values={data}
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
         <Button variant="primary" onClick={updateA} type="submit">
          Guardar cambios
         </Button>
         </Modal.Footer>
        </Modal>
        </div>
      </>
    )
}

export default UserModal;