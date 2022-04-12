import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKJ38edF27BxW1bwA6Q-Zo7QoALH7_Hbw",
  authDomain: "projectmagamentreact.firebaseapp.com",
  projectId: "projectmagamentreact",
  storageBucket: "projectmagamentreact.appspot.com",
  messagingSenderId: "149295620416",
  appId: "1:149295620416:web:929005bcf32aa470d05aa5",
};

// init App

firebase.initializeApp(firebaseConfig);

// init Firestore

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.Timestamp;

// init Auth

const projectAuth = firebase.auth();


export { projectFirestore, projectAuth, timestamp };
