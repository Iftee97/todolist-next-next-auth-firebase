import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAM3c3_YA62Dtuyuoadg7CRLowucJ8Yt1Q",
  authDomain: "todo-list-next-adcf4.firebaseapp.com",
  projectId: "todo-list-next-adcf4",
  storageBucket: "todo-list-next-adcf4.appspot.com",
  messagingSenderId: "95176804372",
  appId: "1:95176804372:web:ac8e2871afd6883e4b7f01"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
