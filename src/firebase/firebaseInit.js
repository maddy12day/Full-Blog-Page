import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCIdhavA1sTRQA9kfHUGUdjZIQToN0lfTk",
    authDomain: "yourblogs-209ee.firebaseapp.com",
    projectId: "yourblogs-209ee",
    storageBucket: "yourblogs-209ee.appspot.com",
    messagingSenderId: "756377437290",
    appId: "1:756377437290:web:6ffa73276725c72dca3613"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp}
  export default firebaseApp.firestore();