import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { CreatePost } from './Create';
import { PostCard } from './PostCard';
import { Sites } from '../SitiosInteres/Sites';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../Context/authContext';
import './ReadPost.css';

export const ReadPost = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');
  const { user } = useAuth();

  //Leer data y actualizar DOM
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      //Obtener Data al cargar componente
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
      //Pasar Data al Estado
      setPosts(getData);
    };
    //console.log(posts);
    getPosts();
  }, []);


//-------------------------- Leer Comentarios de este Post -------------------------//
const [comments, setComments] = useState([]);
const commentsCollectionRef = collection(db, 'Comments');
useEffect(() => {
  const getComments = async () => {
      const dataComments = await getDocs(commentsCollectionRef);
 //Obtener data al montar componente
  const getData = dataComments.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
  }))
  setComments(getData)
  };
  //console.log(comments);
  getComments()
},[]);

  return (
    <div className="contentCommunity"> 
      <div className="avatarAside">
        <Avatar
          src={user.photoURL}
          sx={{ width: 24, height: 24, marginTop: '320%' }}
        ></Avatar>
      </div>
      <div className="createPost">
      <div className="title1">
    <h2>Comunidad</h2>
    </div> 
        <CreatePost setPosts={setPosts} />
      </div>
      <main className="postArea">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                marginTop: '5%',
                marginRight: '5%',
                marginBottom: '5%',
              }}
            >
              <PostCard
                publication={post.input}
                author={post.author}
                id={post.id}
                date={post.fecha}
                hour={post.hora}
                minute={post.minutes}
                email={post.email}
                avatar={post.avatar}
                file={post.file}
                link={post.url}
                setPosts={setPosts}
                comments={comments}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};
