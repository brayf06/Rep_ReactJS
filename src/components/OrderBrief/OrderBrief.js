import { useParams } from "react-router-dom"

function OrderBrief(){
    const {orderID} = useParams()

    return (
        <h1>Gracias por su compra
            Order number: {orderID}
        </h1>
        
    )
}

export default OrderBrief