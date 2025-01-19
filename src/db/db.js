import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChJVcnUTIGMifoP7WvbmZN0rSygGpVsCc",
    authDomain: "ecommerce-react-517cf.firebaseapp.com",
    projectId: "ecommerce-react-517cf",
    storageBucket: "ecommerce-react-517cf.firebasestorage.app",
    messagingSenderId: "81915151480",
    appId: "1:81915151480:web:19fb5b556bc8c25d50198d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;