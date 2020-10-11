import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfbYA_1pyzww2Ic9FQCB--xiuyA1a8uak",
  authDomain: "rwjewellery-1af5d.firebaseapp.com",
  databaseURL: "https://rwjewellery-1af5d.firebaseio.com",
  projectId: "rwjewellery-1af5d",
  storageBucket: "rwjewellery-1af5d.appspot.com",
  messagingSenderId: "987058088075",
  appId: "1:987058088075:web:88bf5d94b85f02d1b34c8e",
  measurementId: "G-2YT9ZNWLV7",
};

firebase.initializeApp(firebaseConfig);


const storageRef = firebase.storage().ref();
const storageRef2 = firebase.storage();


export {storageRef, storageRef2, firebase as default};

