//Modal para editar la información del usuario seleccionado
import { Modal, Row, Col, Button, Container } from 'react-bootstrap'
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

//Se provee el ID al seleccionar el campo
export const EditModal = ({ id, name, lastName, email, phone, birthday, gender }) => {
  //Seteo del modal apertura & cierre
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = ({ target: { name, value } }) => {
    setUpdate({ ...update, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Update de usuarios
    const refUpdate = doc(db, `Users/${id}`);
    try {
      console.log("cargando")
      updateDoc(refUpdate, 
        update
      );
      handleClose();
    } catch (error) {
      console.log(error);
    }  
  }

  return (
    <>
      {/* Botón que aparece en el historial del usuario */}
      <Button variant="outline-dark" size="sm" onClick={handleShow} className="btnMdl">
        Editar Información
      </Button>
      {/* Inicia modal para editar informaciòn */}
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
                <input type="text" placeholder={name} onChange={handleChange} name="name"/>  
            </Col>
            <Col xs={6} md={4}>
              <label>Apellido(s):</label>
                <input type="text" placeholder={lastName} onChange={handleChange} name="lastname"/>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <label>Email registrado:</label>
                <input type="mail" placeholder={email} onChange={handleChange} name="email"/>
            </Col>
            <Col xs={6} md={4}>
              <label>Teléfono:</label>
                <input type="tel" placeholder={phone} onChange={handleChange}/>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label>Cumpleaños: </label>
              <input type="date" value={birthday} onChange={handleChange} name="birthday"/>
            </Col>
            <Col xs={6} md={4}>
              <label>Sexo: </label>
                <input list='gender' placeholder={gender} onChange={handleChange} name="gender"/>
                <datalist id='gender'>
                  <option value='Femenino'>Femenino</option>
                  <option value='Masculino'>Masculino</option>
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