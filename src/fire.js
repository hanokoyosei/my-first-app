import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDO68l4GKmnWceyipiAmYSCHxH81LgcFFM",
  authDomain: "minga-2ca94.firebaseapp.com",
  projectId: "minga-2ca94",
  storageBucket: "minga-2ca94.appspot.com",
  messagingSenderId: "113191357406",
  appId: "1:113191357406:web:9fc9da32a0ded2d7636b4f"
};

const fire = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig)

export default fire;
