import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1uQkysF-evbvjH15InyGmHtP98FdJnM4",
  authDomain: "social-media-clone-a65ab.firebaseapp.com",
  projectId: "social-media-clone-a65ab",
  storageBucket: "social-media-clone-a65ab.appspot.com",
  messagingSenderId: "1006610018179",
  appId: "1:1006610018179:web:931f9550d169b4588a10b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
