
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBOw8tMXaslO-TYl7rYOjWtJy1Pu6T-bcU",
  authDomain: "chatapp-v0.firebaseapp.com",
  projectId: "chatapp-v0",
  storageBucket: "chatapp-v0.appspot.com",
  messagingSenderId: "231557230625",
  appId: "1:231557230625:web:8ba083361de8854b943360"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db  = getFirestore();