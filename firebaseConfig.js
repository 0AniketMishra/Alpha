
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC1EXT4exheSKY-lJW_zaA3M2clyfS2TeY",
    authDomain: "techsparks-32cab.firebaseapp.com",
    projectId: "techsparks-32cab",
    storageBucket: "techsparks-32cab.appspot.com",
    messagingSenderId: "108607861956",
    appId: "1:108607861956:web:569af3978d43caf1238591",
    measurementId: "G-9HM3LDXP0R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app)

export {db,auth} 