import { useEffect, useState } from 'react'
import data from "../data/data"
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetailContainer.css"
import ItemDetail from "../Item/ItemDetail";


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

const id = useParams().id;

useEffect(() => {
  getItemData(id).then((respuesta) => {
    setItem(respuesta);
  });
}, [id]);

return(
    <ItemDetail item={item}/>
)
}

export default ItemDetailContainer