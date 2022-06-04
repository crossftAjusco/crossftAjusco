import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import swal from 'sweetalert';


export const Delete = ({ id, setPosts }) => {

  const postsCollectionRef = collection(db, 'Posts');
  //Eliminar Post
  const deletePost = async (id) => {
    //console.log(id);
    await swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este post.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        try {
          //Eliminar
          deleteDoc(doc(db, 'Posts', id));
          //console.log('Document deleted with ID: ', id);
          //Actualizar estado
          getAllData();
        } catch (error) {
          //console.error('Error adding document: ', error);
        }
        swal("¡Este post ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("¡Uuf! ¡Salvaste este post!");
      }
    });
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
