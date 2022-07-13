import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyDPWNnRZf5SCeekmF-fG4nSNHDh-patc_w',
  authDomain: "fir-basics-def43.firebaseapp.com",
  projectId: "fir-basics-def43",
  storageBucket: "fir-basics-def43.appspot.com",
  messagingSenderId: "163416466645",
  appId: "1:163416466645:web:80bf1fa26527aa963bee5c",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);