import { useState } from "react";
import { Button, Modal} from "react-bootstrap";

export const ConfModal = ({ show, setShow, modalConf }) => {
    const handleClose = () => setShow(false);
    const [showEdit, setShowEdit] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleClose();
    };

    const handleClick = () => {
        setShowEdit(!showEdit);
    };
    
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        ¿Estás seguro de borrar al usuario?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Al eliminar al usuario no podrán recuperarse los datos ingresados.</p>
                </Modal.Body>
            </Modal>
        </>
        // <div>
        //     <Button variant="outline-danger" size="sm" type="submit" onClick={handleSubmit}>Eliminar usuario</Button>
        // </div>
    )
}