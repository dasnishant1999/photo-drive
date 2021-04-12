import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBZqHV0qLfR0y4ANd2M7ja7V4q_FHZKygo",
  authDomain: "photo-drive-1914e.firebaseapp.com",
  projectId: "photo-drive-1914e",
  storageBucket: "photo-drive-1914e.appspot.com",
  messagingSenderId: "992857647983",
  appId: "1:992857647983:web:ee2da092e886ce8227169a",
  measurementId: "G-VGGJRT18RY",
};

firebase.initializeApp(firebaseConfig);

const photoStorage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { photoStorage, db, timestamp };
