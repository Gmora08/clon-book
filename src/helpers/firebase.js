import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPWFhLmEiKgiCq5P0TUmQyTcKiL47f7Fw",
  authDomain: "gusbook-70a96.firebaseapp.com",
  databaseURL: "https://gusbook-70a96.firebaseio.com",
  projectId: "gusbook-70a96",
  storageBucket: "gusbook-70a96.appspot.com",
  messagingSenderId: "383844514388"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
