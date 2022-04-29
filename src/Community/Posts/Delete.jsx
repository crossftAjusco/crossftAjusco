import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const Delete = ({ id, avatar, setPosts }) => {
  const postsCollectionRef = collection(db, 'Posts');
  //Eliminar Post
  const deletePost = async (id) => {
    //console.log(id);
    try {
      //Eliminar
      await deleteDoc(doc(db, 'Posts', id));
      //console.log('Document deleted with ID: ', id);
      //Actualizar estado
      getAllData();
    } catch (error) {
      //console.error('Error adding document: ', error);
    }
  };

  //Traer nueva data actualizada
  const getAllData = async () => {
    const data = await getDocs(postsCollectionRef);
    //Recuperar nueva data
    const getData = data.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
        fecha: doc.data().date.toDate().toDateString(),
        hora: doc.data().date.toDate().getHours(),
        minutes: doc.data().date.toDate().getMinutes(),
      }))
      .slice()
      .sort((a, b) => b.date - a.date);
    //console.log(getData);
    //Actualizar Estado
    setPosts(getData);
  };

  return (
      <DeleteIcon
        onClick={() => deletePost(id)}
        style={{ cursor: 'pointer', color: '#FF6961', fontSize: 'large' }}
      />
  );
};
