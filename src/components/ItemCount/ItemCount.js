import { useState } from "react";

function ItemCount({stock}){
    const [count, setCount] = useState(1);

    function handleAdd(){
        if (count < stock){
            setCount(count + 1)
        }
        
    }

    function handleSubstract(){
        if (count > 1){
            setCount(count - 1)
        }
        
    }

    return (
        
        <div className="count-container text-center">
            <div className="count-btns">
                <button className="btn btn-outline-secondary rounded-0" onClick={handleSubstract}> - </button>
                <a style={{padding: "20px" }}>{count}</a>
                <button className="btn btn-outline-secondary rounded-0" onClick={handleAdd}> + </button>
            </div>
        </div>
    )
}

export default ItemCount