//Contexto: crear un estado (UseState) por un archivo externo
//Equivale a crear un UseState, para exportar los User, Users, LogIn, Auth, LogUp, Admin, User, etc... a donde sea requerido reciclando las funciones de petición a la DB-Firestore
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

//se crea el contexto a partir de importacion createContext by React
export const authContext = createContext();
//función que retorna el contexto creado
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not an auth provider");
  // console.log(context)
  return context;
};
//Proveedor de datos globales, "Seteo" de la info requerida
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(
    localStorage.getItem("admin") || false);
  const [bro, setBro] = useState(false);
  const [users, setUsers] = useState(null);
  //--------Todo componente "hijo" puede acceder al componente padre---------
  //función para crear un usuario  mediante createUserWithEmailAndPassword() (Email-firebase)
  const signup = (email, password) =>
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password);
  //función para iniciar sesión desde los datos Auth almacenados en Firebase (Email)
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  //función que permite cerrar sesión de interacción (fb)
  const logout = () => signOut(auth);
  //Autetificación con Gmail
  const GooglProvider = new GoogleAuthProvider();
  //función que permite abrir una nueva venta (emergente) para el inicio de sesión en Google
  const loginWithGoogle = () => signInWithPopup(auth, GooglProvider);
  //función que permite reestablecer el password mediante el uso de email-gmail
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };
  //Poner useEffect dentro del componente nos permite acceder a la variable de estado (o a cualquier prop) directamente desde el efecto.
  useEffect(() => {
    //Escuchador de eventos en tiempo real -onSnapshot by Firebase
    onSnapshot(collection(db, 'Users'), (snapShot) => {
      //Lista de usuarios registrados [doc.data()] y su respectivo Id para realizar cambios unitarios
      setUsers(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    //Usuario logueado, el estado cambia si hay o no un usuario logueado
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      //Permite ver los datos del usuario "logueado"
      //console.log(currentUser.email)
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  //Resultados de las funciones declaradas anteriormente, fungen como proveedor de datos en contexto
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
