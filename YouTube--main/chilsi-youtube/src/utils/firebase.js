// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7UIzd7nC-u8cQIDPl5lwoyv0dMzTHS8I",
    authDomain: "fir-249dc.firebaseapp.com",
    projectId: "fir-249dc",
    storageBucket: "fir-249dc.appspot.com",
    messagingSenderId: "1073830038520",
    appId: "1:1073830038520:web:448c4d11dfac872389640d",
    measurementId: "G-W36LEQ0EBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// create project in firebase
// npm install firebase
// firebase login 
// firebase init 