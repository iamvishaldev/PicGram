// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/storage"; // to store our images
import "firebase/firestore"; // it is use for database

var firebaseConfig = {
  apiKey: "AIzaSyBn9W6C4VxFH2YeQiuHKLi_vqt5YJtFSpA",
  authDomain: "picgram-a57e7.firebaseapp.com",
  projectId: "picgram-a57e7",
  storageBucket: "picgram-a57e7.appspot.com",
  messagingSenderId: "145553639388",
  appId: "1:145553639388:web:1dd46d133c52542b3f7119",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
