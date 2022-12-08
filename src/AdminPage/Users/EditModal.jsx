//Modal para editar la información del usuario seleccionado
import { Modal, Row, Col, Button, Container } from 'react-bootstrap'
import { useState } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const db = getFirestore();

//Se provee el ID al seleccionar el campo
export const EditModal = ({ id, name, lastName, email, phone, birthday, gender }) => {
  //Seteo del modal apertura & cierre
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = (e) => {
    { console.log(e.target.value) }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    //Update de usuarios
  //   const refUpdate = doc(db, 'Users', id)
  //   await updateDoc(refUpdate), {
  //   }
  // }

  // const handleChange = () => {
    
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
              <label>Nombre(s):</label>
                <input type="text" placeholder={name} onChange={onChange} />  
            </Col>
            <Col xs={6} md={4}>
              <label>Apellido(s):</label>
              <input type="text" placeholder={lastName}/>
            </Col>
          </Row>
  
          <Row>
            <Col xs={6} md={4}>
              <label>Email registrado:</label>
                <input type="mail" placeholder={email} />
            </Col>
            <Col xs={6} md={4}>
              <label>Teléfono:</label>
                <input type="tel" placeholder={phone} />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label>Cumpleaños: </label>
              <input type="date" value={birthday}/>
            </Col>
            <Col xs={6} md={4}>
              <label>Sexo: </label>
                <input list='gender' placeholder={gender} />
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