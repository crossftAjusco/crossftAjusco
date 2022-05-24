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
import { collection, getDocs, getFirestore, query, where, onSnapshot } from "firebase/firestore";
import app from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
//se utiliza el parámetro app desde as credenciales de firestore
const firestore = getFirestore(app);
//se crea el contexto a partir de importacion createContext
export const authContext = createContext();
//función que retorna datos generales del personal "logueado"
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
  //--------Todo componente "hijo" puede acceder al componente padre (objeto user)---------
//función para crear un usuario  mediante createUserWithEmailAndPassword() (firebase)
  const signup = (email, password) =>
    // console.log(email, password);
    //----desde la documentacion de FB----
    createUserWithEmailAndPassword(auth, email, password);
//función para iniciar sesión desde los datos Auth almacenados en Firebase
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
//función que permite cerrar sesión de interacción (fb)
  const logout = () => signOut(auth);
//Auth con Google proveedor del servicio de almacenamiento de info.
  const GooglProvider = new GoogleAuthProvider();
  //función que permite abrir una nueva venta (emergente) para el inicio de sesión en Google
  const loginWithGoogle = () => signInWithPopup(auth, GooglProvider);
//función que permite reestablecer el password mediante el uso de email
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };
//permite navegar entre rutas
  const navigate = useNavigate();
//función que permite ver los datos de los usuarios registrados desde fb
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
