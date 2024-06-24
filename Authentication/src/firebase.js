
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCk0yaxY1xcJee9calhh3m3JLQqU6zMjNE",
  authDomain: "authentication-9b1e2.firebaseapp.com",
  projectId: "authentication-9b1e2",
  storageBucket: "authentication-9b1e2.appspot.com",
  messagingSenderId: "946435023364",
  appId: "1:946435023364:web:31f1df36ca6d704d724b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);