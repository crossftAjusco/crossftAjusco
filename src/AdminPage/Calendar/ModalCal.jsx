import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import app from "../../firebase";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  getDocs,
  collection,
} from "firebase/firestore";
const db = getFirestore(app);

const ModalCal = ({ show, setShow, modalUserInfo }) => {
  const handleClose = () => setShow(false);
  const [date, setDate] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(modalUserInfo.payday);
    // console.log(modalUserInfo.nextPayday);
    const timeStamp = Date.parse(date) + 18000000;
    const nuevaFecha = new Date(timeStamp); //Nueva fecha de pago utilizando el seleccionador
    if (!timeStamp) {
      console.log(modalUserInfo.nextPayday);
      let proximoPago = new Date();
      proximoPago.setMonth(modalUserInfo.nextPayday.getMonth() + 1);
      proximoPago.setFullYear(modalUserInfo.nextPayday.getFullYear());
      proximoPago.setDate(modalUserInfo.nextPayday.getDate());
      console.log(proximoPago);
      let docRef = doc(db, `Users/${modalUserInfo.id}`);
      console.log(modalUserInfo.nextPayday);
      console.log(proximoPago);
      await updateDoc(docRef, {
        payday: modalUserInfo.nextPayday,
        next_payday: proximoPago,
      });
      setDate({});
      handleClose();
      return;
    }
    let docRef = doc(db, `Users/${modalUserInfo.id}`);
    await updateDoc(docRef, {
      payday: modalUserInfo.nextPayday,
      next_payday: nuevaFecha,
      //--------------------------------------------falta agregar el push al arreglo de pagos
    });
    setDate({});
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalUserInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ultimo Pago: {modalUserInfo.strPayday}</p>
          <p>Proximo pago: {modalUserInfo.strNext_payday}</p>
          <Form>
            <Form.Group>
              <Form.Label>Fecha del próximo pago</Form.Label>
              <Form.Control
                type="date"
                required
                id="date"
                onChange={(e) => setDate(e.target.value)}
              />
              <Form.Text className="text-muted">
                Fecha del próximo pago
              </Form.Text>
            </Form.Group>
            <Button variant="danger" type="submit" onClick={handleSubmit}>
              Actualizar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCal;
