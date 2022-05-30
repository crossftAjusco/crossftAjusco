import { useState } from "react";
import { Button, Modal} from "react-bootstrap";

export const ConfModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-danger" size="sm" onClick={handleShow}>
                Eliminar usuario
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Borrar usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Al eliminar al usuario no podrán recuperarse los datos ingresados.</p>
                    <p>¿Estás seguro de borrar al usuario?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="modalbtn"> 
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleClose} className="modalbtn">
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}