import { useEffect, useState } from 'react'
import data from "../data/data"
import { useParams } from 'react-router-dom';

function getItemData(idRecibida){
    return new Promise((resolve) => {
        setTimeout(() => {
            const requestedItem = data.find( item => item.id === Number(idRecibida))
            resolve(requestedItem)
        }, 2000);
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
    <div className="card text-center bg-dark mw-50">
           
    </div>   
)
}

export default ItemDetailContainer