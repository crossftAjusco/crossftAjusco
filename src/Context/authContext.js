//Contexto: crear un estado por un archivo externo
//Equivale a crear un UseState, solo que se puede exportar el User "Logueado" en todos los componentes
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const firestore = getFirestore(app);
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not an auth provider");
  // console.log(context)
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [bro, setBro] = useState(false);
  const [users, setUsers] = useState(null);
  // const user = {
  //     login: true
  // }
  //le permite autentificarse
  //--------Todo componente "hijo" puede acceder al componente padre (objeto user)---------

  const signup = (email, password) =>
    // console.log(email, password);
    //----desde la documentacion de FB----
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const GooglProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => signInWithPopup(auth, GooglProvider);

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  const navigate = useNavigate();

  async function traerUsers() {
    const coleccRef = collection(firestore, "Users");
    const users = [];
    const querySnapshot = await getDocs(coleccRef);
    querySnapshot.forEach((doc) => {
      let user = doc.data();
      user.id = doc.id;
      users.push(user);
    });
    return users;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      //Permite ver los datos del usuario "logueado"
      //console.log(currentUser.email)
      setUser(currentUser);
      setLoading(false);
      //if(currentUser.email == "delias16.hernandez@gmail.com"){
      //    navigate('/admin')
      //} else {
      //    navigate('/user')
      //}
    });
    async function traerColl() {
      const usersObtenidos = await traerUsers();
      setUsers(usersObtenidos);
    }
    traerColl();
    return () => unsubscribe;
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        admin,
        bro,
        users,
        setAdmin,
        setBro,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
