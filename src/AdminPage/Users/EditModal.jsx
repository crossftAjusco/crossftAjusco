import { Modal, Row, Col, Button, Container } from 'react-bootstrap'
import { useState } from 'react';

export const EditModal = ({ id }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="outline-dark" size="sm" onClick={handleShow} className="btnMdl">
        Editar Información
      </Button>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ModTitle">
          Editar Usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
  
          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="mdlFooter">
        <Button onClick={handleClose} variant="secondary" className="modalbtn">Cancelar</Button>
        <Button onClick={handleClose} variant="warning" className="modalbtn">Guardar</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}