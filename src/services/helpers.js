import destinos from "../components/data/data"
import { initializeApp } from "firebase/app"; 
import { getFirestore, collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAWA4iAe1pLmLgVbFuiPLWVrpz60Og09VA",
    authDomain: "proyectocoder-3b3c6.firebaseapp.com",
    projectId: "proyectocoder-3b3c6",
    storageBucket: "proyectocoder-3b3c6.appspot.com",
    messagingSenderId: "20136307907",
    appId: "1:20136307907:web:7ee340fe35f57a4f49c676"
  };

const firebaseDB = initializeApp(firebaseConfig);

const db = getFirestore(firebaseDB)

export async function exportData(){
    const datosCollectionRef = collection(db, "destinos")


    for(let item of destinos){
        item.index = item.id
        delete item.id
        const res = await addDoc(datosCollectionRef, item)
    }
}