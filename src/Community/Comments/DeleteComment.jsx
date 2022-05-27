import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';



export const DeleteComment = ({id}) => {

    const deletePost = async () => {
        //console.log(id)
        try {
            //Eliminar
            await deleteDoc(doc(db, 'Comments', id));
            console.log('Document deleted with ID: ', id);
            //Actualizar estado
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
    <DeleteIcon
    style={{color: "#FF6961", cursor: "pointer"}}
    onClick={() => deletePost(id)}
    />
    )
}
