import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import { getData, getCategoryData } from "../../services/firebase";

function ItemListContainer(){
    let [city, setItem] = useState([]);
    const { idCategoria } = useParams();

const reciboContinentes = idCategoria === undefined ? getData : getCategoryData

    useEffect(() => {
        reciboContinentes(idCategoria).then((respuesta) => { setItem(respuesta);
    });
  }, [idCategoria]);

  return <ItemList city={city} />;
}

export default ItemListContainer