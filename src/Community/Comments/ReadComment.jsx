import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../Context/authContext';

export const ReadComment = () => {
    const [comments, setComments] = useState([]);
    const commentsCollectionRef = collection(db, 'Comments');
    
//Leer data y actualizar DOM
useEffect(() => {
    const getComments = async () => {
        const data = await getDocs(commentsCollectionRef);
   //Obtener data al montar componente
    const getData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }))
    setComments(getData)
    };
    console.log(comments);
    getComments()
},[]);

  return (
    <div>
        <div>Lista de comentarios:</div>
    <main>
        {comments.map((comment) =>{
            return (
                <div key={comment.id}>
                    <div>{comment.author}</div>
                    <div>{comment.comment}</div>
                    <div>{comment.idOrigin}</div>
                </div>
            )
        })}
    </main>

    </div>
  )
}
