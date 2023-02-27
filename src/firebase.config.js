import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATIo8_jjdgmaGE_af59krzqHT8TVc7uqA",
  authDomain: "enovf-e8e67.firebaseapp.com",
  projectId: "enovf-e8e67",
  storageBucket: "enovf-e8e67.appspot.com",
  messagingSenderId: "14400003884",
  appId: "1:14400003884:web:c281ae16c34c8a4a93d689",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
