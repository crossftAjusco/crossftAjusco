//------------Estas son las credenciales de Firebase ------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAECyJVrYJce58cM3NMsHfbcb_fQ2JHXlQ",
  authDomain: "crossftproject.firebaseapp.com",
  projectId: "crossftproject",
  storageBucket: "crossftproject.appspot.com",
  messagingSenderId: "80614320870",
  appId: "1:80614320870:web:2ae2bbb78e416411b42927",
  measurementId: "G-XBS88XHRPB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

//Se exporta app para la auth con Google (se puede usar para otros fines de interacción con FB)
export default app;
