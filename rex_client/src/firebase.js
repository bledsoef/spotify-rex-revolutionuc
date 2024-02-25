// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAaf-HzfNaJeD79xzBsnw42Sh-Iiamj-HA",
    authDomain: "spotify-rex-c5ca0.firebaseapp.com",
    projectId: "spotify-rex-c5ca0",
    storageBucket: "spotify-rex-c5ca0.appspot.com",
    messagingSenderId: "163903625617",
    appId: "1:163903625617:web:0d0abff4a699ac21f1e230",
    measurementId: "G-H5MF9R2W19"
  };
const app = initializeApp(firebaseConfig);
// Initialize Firebase Storage
export const storage = getStorage(app);
// Initialize Firebase Analytics
// Create a reference to 'album_covers/thacarterIII.jpg'