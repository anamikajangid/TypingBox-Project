// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from "firebase";
// import "firebase/auth";
// import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAurHqaa5NS5atZoBCNUVM-ami-jFOSj6M",
//   authDomain: "typing-speed-test-78fdd.firebaseapp.com",
//   projectId: "typing-speed-test-78fdd",
//   storageBucket: "typing-speed-test-78fdd.appspot.com",
//   messagingSenderId: "642103947194",
//   appId: "1:642103947194:web:737f2e9e09df2b7c503783",
//   measurementId: "G-CZ0DHRL35R",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAurHqaa5NS5atZoBCNUVM-ami-jFOSj6M",
  authDomain: "typing-speed-test-78fdd.firebaseapp.com",
  projectId: "typing-speed-test-78fdd",
  storageBucket: "typing-speed-test-78fdd.appspot.com",
  messagingSenderId: "642103947194",
  appId: "1:642103947194:web:737f2e9e09df2b7c503783",
  measurementId: "G-CZ0DHRL35R",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseapp.firestore();

export { auth, db };
