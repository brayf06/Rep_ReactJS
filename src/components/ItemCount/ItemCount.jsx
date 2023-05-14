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
        
        <div className="count-container">
            <div className="count-btns">
                <button onClick={handleSubstract}> - </button>
                <p>{count}</p>
                <button onClick={handleAdd}> + </button>
            </div>
        </div>
    )
}

export default ItemCount