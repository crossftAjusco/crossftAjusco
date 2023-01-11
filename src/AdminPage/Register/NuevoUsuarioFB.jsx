//componente que crea el nuevo usuario a partir del nuevo registro en firebase
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

const NuevoUsuario = async (valores) => {
    //Se trae los valores al clickearle en "onSubmit"
    // console.log(valores);
    try { //Desde la documentación, se crea la referencia, se agrega un documento nuevo "addDoc"
        const userRef = await addDoc(collection(db, 'Users'), valores);
        // console.log("Document written with ID: ", userRef.id); //Se muestra en consola el ID generado automáticamente
    } catch (e) { //Cacha un error si algo pasa que impida la actualización de la base de datos 
        console.error("Error adding document: ", e)
    }
    //Se crea un nuevo documento en firebase    
}
//como única función se exporta "Default"
export default NuevoUsuario