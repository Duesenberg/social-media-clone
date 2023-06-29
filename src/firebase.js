import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

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
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Create a root reference
const storage = getStorage();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { app, auth, storage, db }
