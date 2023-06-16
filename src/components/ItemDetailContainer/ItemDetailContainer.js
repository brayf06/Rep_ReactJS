import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";
import { cartContext } from "../../context/cartContext"
import Loader from "../Loader/Loader"
import Swal from 'sweetalert2'
import { getItemData } from '../../services/firebase';


function ItemDetailContainer(){
const [item, setItem] = useState()
const [countInCart, setCountInCart] = useState(0)

const {cart, addItem}  = useContext(cartContext)

function onAddToCart(count){
  addItem(item, count)
  setCountInCart(count)
  Swal.fire(
    '¡Bien hecho!',
    `Agregaste ${count} pasajes a ${item.pais} con destino a la ciudad de ${item.ciudad} al carrito`,
    'success'
  )
}

const id = useParams().id;

useEffect(() => {
  getItemData(id).then((respuesta) => {
    setItem(respuesta);
  });
}, [id]);

if (item){
  return(
    <ItemDetail item={item} onAddToCart={onAddToCart} countInCart={countInCart} />
)
}
return <Loader />
}

export default ItemDetailContainer