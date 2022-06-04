//Componente modal de confirmación de eliminación
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import WarningIcon from '@mui/icons-material/Warning';
import './confirm.css';
import { getFirestore, doc, deleteDoc} from "firebase/firestore";
//Se necesita iniciar el getFirestore para direccionar la referencia del Delete()
const db = getFirestore();
//Modal traido de la librería Bootstrap
export const ConfModal = ({ id }) => {
    //Despliega el modal con el seteo de Show inicializado en false
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//Al dar click en eliminar dentro del modal se borra el "doc" dentro de la "collection" de FB
    const deleteUsuario = (id) => {
            try { //si todo sale bien...
                deleteDoc(doc(db, 'Users', id));   
            } catch (e) { //si ocurre un error en la conexion o referencia...
                alert("Ocurrio el error: " + e)
            }
        }

    return (
        <>  
            {/* Retorna un botón que aparece en pantalla */}
            <Button variant="outline-danger" size="sm" onClick={handleShow}>
            Eliminar usuario
            </Button>
            {/* El modal se inicializa en show=falso, hasta que sea true para mostrarse */}
            <Modal show={show} onHide={handleClose}>
                {/* Elementos del modal Bootstrap */}
                <Modal.Header >
                    <Modal.Title className="ModTitle" >
                    Borrar usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <p className="error">Al eliminar al usuario no podrán recuperarse los datos ingresados.</p>
                        <p className="error"><b>
                            <WarningIcon color="warning"/>
                            ¿Estás seguro de borrar al usuario?
                            <WarningIcon color="warning" />
                        </b></p>
                        </center>
                </Modal.Body>
                <Modal.Footer className="mdlFooter">
                    <Button variant="secondary" onClick={handleClose} className="modalbtn"> 
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={()=> deleteUsuario(id)} className="modalbtn">
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}