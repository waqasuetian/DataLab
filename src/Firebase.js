// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLHMXjUly__SDGIxj7Bb94n7hvF2gl7cI",
  authDomain: "datalabb-db648.firebaseapp.com",
  projectId: "datalabb-db648",
  storageBucket: "datalabb-db648.appspot.com",
  messagingSenderId: "204282980605",
  appId: "1:204282980605:web:0a934fad2464b10156f694",
  measurementId: "G-K9R66XZQ10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { storage, analytics };
