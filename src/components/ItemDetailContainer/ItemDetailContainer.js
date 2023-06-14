import { useEffect, useState, useContext } from 'react'
import data from "../data/data"
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";
import { cartContext } from "../../context/cartContext"


function getItemData(idRecibida){
    return new Promise((resolve) => {
        setTimeout(() => {
            const requestedItem = data.find( item => item.id === Number(idRecibida))
            resolve(requestedItem)
        }, 150);
    })
}

function ItemDetailContainer(){
const [item, setItem] = useState({})

const {cart, addItem}  = useContext(cartContext)
console.log("context:", cart)

function onAddToCart(count){
  addItem(item, count)
  alert(`Agregaste ${count} viajes a ${item.pais} al carrito`)
}



const id = useParams().id;

useEffect(() => {
  getItemData(id).then((respuesta) => {
    setItem(respuesta);
  });
}, [id]);

return(
    <ItemDetail item={item} onAddToCart={onAddToCart} />
)
}

export default ItemDetailContainer