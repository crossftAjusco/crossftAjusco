import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';

export const Comments = () => {

    const [comment, setComment] = useState("")

    //Modelar objeto
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setComment(e.target.value)
        console.log(comment)
    }

    //Subir objeto a firestore
    const handleComment = (e) => { 
        e.preventDefault()
        console.log("commented")
        console.log(comment)
    //Limpiar estado input  
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
                autoFocus
            />
            </FloatingLabel>
            {comment === "" ? null : <Button onClick={handleComment} size="small" variant="outlined" style={{float: "right", marginBottom: "3%"}}>Comentar</Button> }
        </Form>
    </div>
)
}
