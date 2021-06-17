import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAL784PKR5osyPeW-SI8cXzNf8AzRlC548",
  authDomain: "netflix-clone-rm.firebaseapp.com",
  projectId: "netflix-clone-rm",
  storageBucket: "netflix-clone-rm.appspot.com",
  messagingSenderId: "884279635656",
  appId: "1:884279635656:web:68c9deca94b7b302777ffd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
