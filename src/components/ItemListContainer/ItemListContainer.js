import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import data from "../data/data"

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

function ItemListContainer(){
    let [city, setItem] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        getData().then((respuesta) => {
            if (idCategoria) {
            const filtrarDestino = respuesta.filter(
            (item) => item.continente === idCategoria
        );
            setItem(filtrarDestino);
        } else {
            setItem(respuesta);
        }
    });
  }, [idCategoria]);

  return <ItemList city={city} />;
}

export default ItemListContainer