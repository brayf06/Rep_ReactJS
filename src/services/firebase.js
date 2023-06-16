// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore"
import Swal from "sweetalert2";

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

export async function getData(){
    const querySnapshot = await getDocs(collection(db, "destinos"))
    const arrayItems = querySnapshot.docs;
    const dataItems = arrayItems.map((doc) => {
        return {...doc.data(), id: doc.id}
    })
    return dataItems
}

export async function getItemData(idItem){
    const querySnapshot = await getDoc(doc(db, "destinos", idItem ))
    if (querySnapshot.exists()){
        return {id: querySnapshot.id, ...querySnapshot.data()}
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Dato no encontrado',
          })
    }
    
}

export async function getCategoryData(idCategoria){
    const itemsCollectionRef = collection(db, "destinos")
    const q = query(itemsCollectionRef, where("continente", "==", idCategoria))
    const querySnapshot = await getDocs(q)
    const arrayItems = querySnapshot.docs;
    const dataItems = arrayItems.map((doc) => { return {...doc.data(), id:doc.id}})
    return dataItems
}

export async function createOrder(data){
    const ordersCollectionRef = collection(db, "ordenes")
    const respuesta = await addDoc(ordersCollectionRef, data)
    return respuesta.id
}

export async function createOrderWithStockUpdate(data) {
    const ordersCollectionRef = collection(db, "ordenes");
    const batch = writeBatch(db);
    const { items } = data;
  
    for (let itemInCart of items) {
    console.log(itemInCart.id)
    console.log(itemInCart)
    console.log(db)
      const refDoc = doc(db, "destinos", itemInCart.id);
      const docSnap = await getDoc(refDoc);
  
      const { stock } = docSnap.data();
      console.log(stock);
  
      const stockToUpdate = stock - itemInCart.count;
      if (stockToUpdate < 0) {
        throw new Error(`No hay vuelos disponibles para: ${itemInCart.pais}`);
      } else {
        const docRef = doc(db, "destinos", itemInCart.id);
        batch.update(docRef, { stock: stockToUpdate });
      }
    }
  
    await batch.commit();
    const response = await addDoc(ordersCollectionRef, data);
  
    return response.id;
  }
