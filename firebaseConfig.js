
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCp_Bx-V1bnm6_tGm19Hb21bVo6FUaLtLQ",
    authDomain: "shadow-trade-17aaa.firebaseapp.com",
    projectId: "shadow-trade-17aaa",
    storageBucket: "shadow-trade-17aaa.appspot.com",
    messagingSenderId: "410331685267",
    appId: "1:410331685267:web:23e84278aea9e0eb934866"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app)

export {db,auth} 