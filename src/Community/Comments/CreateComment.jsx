import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../Context/authContext';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";

export const CreateComment = ({idOrigin}) => {
    
    const { user } = useAuth();
    const [comment, setComment] = useState("")

    //Modelar objeto
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setComment(e.target.value)
        console.log(comment)
    }

    //Subir objeto a firestore
    const handleComment = async (e) => { 
        e.preventDefault()
        console.log(comment)
        const date = new Date();
        try {
            const docRef = await addDoc(collection(db, 'Comments'), {
                comment: comment,
                email: user.email,
                date: date,
                author: user.displayName,
                avatar: user.photoURL,
                idOrigin: idOrigin
            });
            console.log("Comment writen with ID: ", docRef.id)
        } catch (error) {
            console.log("Error adding the next comment:", error)
        }
    //Limpiar estado input  
    setComment(e.target.name="")
    } 

return (
    <div>
        <div>Comentarios:</div>
        <Form style={{paddingTop: "3%", display: "block", margin: "auto", width: "100%" }}>
        <FloatingLabel
            controlId="floatingTextarea1"
            label="¡Comparte con la comunidad!"
            style={{ color: 'gray' }}>
            <Form.Control 
                as="textarea"
                style={{
                height: '60px',
                borderColor: '#5DADE2',
                marginBottom: "3%"
                }}
                name="comment"
                type="text"
                onChange={handleChange}
                value={comment}
                autoFocus
            />
            </FloatingLabel>
            {comment === "" ? null : <Button onClick={handleComment} size="small" variant="outlined" style={{float: "right", marginBottom: "3%"}}>Comentar</Button> }
        </Form>

    {/*Lectura de comentarios condicionada según idOrigin de Post comentado*/}
        <div>
            {/*<ReadComment/>*/}
        </div>
    </div>
)
}
