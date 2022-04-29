//componente que crea el nuevo usuario a partir del nuevo registro en firebase
import app from '../../firebase'
import { collection, getFirestore, addDoc } from 'firebase/firestore'

const db = getFirestore(app)

const NuevoUsuario = async (valores) => {
    //Se trae los valores al clickearle en "onSubmit"
    console.log(valores);
    //Se crea un nuevo documento en firebase
    const userRef = await addDoc(collection(db, 'Users'), valores)
    //console.log("Document written with ID: ", userRef.id);
}

export default NuevoUsuario