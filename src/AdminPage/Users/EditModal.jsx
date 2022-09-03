//Modal para editar la información del usuario seleccionado
import { Modal, Row, Col, Button, Container } from 'react-bootstrap'
import { useState } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const db = getFirestore();

//Se provee el ID al seleccionar el campo
export const EditModal = ({ id }) => {
  //Seteo del modal apertura & cierre
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = async (e) => {
    e.preventDefault();
    //Update de usuarios
    let docRef = db.collection('Users');
    docRef.doc(id).updateDoc({
      nombre: "",
      apellido: ""
    })
  }

  return (
    <>
      {/* Botón que aparece en el historial del usuario */}
      <Button variant="outline-dark" size="sm" onClick={handleShow} className="btnMdl">
        Editar Información
      </Button>
      {/* Modal para editar informaciòn */}
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ModTitle">
          Editar Usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <label>Nombre:</label>
              <input type="text" placeholder='Nombre'/>  
            </Col>
            <Col xs={6} md={4}>
              <label>Apellido:</label>
              <input type="text" placeholder='Apellido'/>
            </Col>
          </Row>
  
          <Row>
            <Col xs={6} md={4}>
              <label>Email:</label>
              <input type="mail" placeholder='Email'/>
            </Col>
            <Col xs={6} md={4}>
              <label>Teléfono:</label>
              <input type="tel" placeholder='Teléfono'/>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label>Cumpleaños: </label>
              <input type="date" placeholder='Fecha de Nacimiento'/>
            </Col>
            <Col xs={6} md={4}>
              <label>Sexo: </label>
                <input list='gender' />
                <datalist id='gender'>
                  <option value='Femenino'>Femenino</option>
                  <option value='Masculino'>Maculino</option>
                </datalist>
                
            </Col>  
          </Row>  
        </Container>
      </Modal.Body>
      <Modal.Footer className="mdlFooter">
        <Button onClick={handleClose} variant="secondary" className="modalbtn">Cancelar</Button>
        <Button type="submit" onClick={handleSubmit} className="modalbtn" variant="warning">Guardar</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}