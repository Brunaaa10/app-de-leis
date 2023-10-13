import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4wEBAqgOsh-h9BferRZT9wtgEUBixcOw",
  authDomain: "app-de-leis.firebaseapp.com",
  databaseURL: "https://app-de-leis-default-rtdb.firebaseio.com",
  projectId: "app-de-leis",
  storageBucket: "app-de-leis.appspot.com",
  messagingSenderId: "326404515613",
  appId: "1:326404515613:web:a37bd7d5c0709ec727e3f4"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
