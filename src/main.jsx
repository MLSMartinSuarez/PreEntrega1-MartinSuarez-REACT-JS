import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALuXXwGIQ2l_94qgYweXmEBlbpvWrnplU",
  authDomain: "blanqueriacufa10.firebaseapp.com",
  projectId: "blanqueriacufa10",
  storageBucket: "blanqueriacufa10.appspot.com",
  messagingSenderId: "552862003693",
  appId: "1:552862003693:web:45b3a8acc8f6f18abfb7e4"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />
)
