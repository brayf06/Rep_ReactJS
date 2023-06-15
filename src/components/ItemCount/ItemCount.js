import Flex from "../Flex/Flex";
import { useState } from "react";
import Button from "../Boton/boton";

function ItemCount(props){
    const [count, setCount] = useState(1);

    function handleAdd(){
        if (count < props.stock){ setCount(count + 1) }
    }

    function handleSubstract(){
        if (count > 1){ setCount(count - 1)}
        
    }

    return (
        <div className="count-container text-center">
            <div className="count-btns">
                <p className="card-text text-secondary">¿Cuantos pasajes desea reservar?</p>
                <Flex>
                    <Button className="btn btn-outline-secondary rounded-0" onClick={handleSubstract}> - </Button>
                    <a style={{padding: "20px" }}>{count}</a>
                    <Button className="btn btn-outline-secondary rounded-0" onClick={handleAdd}> + </Button>
                </Flex>
            </div>

            <div>
                <Button onClick={() => {props.onAddToCart(count)}}> Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount