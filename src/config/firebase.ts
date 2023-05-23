import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAydGsCgW4ocnKet4PwCG7sopp3vIjfK8Y",
  authDomain: "tizim-systems.firebaseapp.com",
  projectId: "tizim-systems",
  storageBucket: "tizim-systems.appspot.com",
  messagingSenderId: "363260370244",
  appId: "1:363260370244:web:099cda4c8add183b0f8b11"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {app, firestore};
