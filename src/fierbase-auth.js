import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXaIeQ_-5NkuXMIs5kAalAXJ2m_1L79vM",
  authDomain: "fir-auth-2799c.firebaseapp.com",
  projectId: "fir-auth-2799c",
  storageBucket: "fir-auth-2799c.appspot.com",
  messagingSenderId: "742022121156",
  appId: "1:742022121156:web:e7c285fcf74b65960aeb91",
  measurementId: "G-G38J8VC0PS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
