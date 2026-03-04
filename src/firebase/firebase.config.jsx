
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAICsWH21irSHvjp6_9vl5-5Pak_aClHIE",
  authDomain: "mern251-2-75c42.firebaseapp.com",
  projectId: "mern251-2-75c42",
  storageBucket: "mern251-2-75c42.firebasestorage.app",
  messagingSenderId: "555316684857",
  appId: "1:555316684857:web:9173db1ec7321c839cc5e8",
};






console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);
export default app;