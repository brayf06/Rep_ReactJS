import { useParams } from "react-router-dom"

function OrderBrief(){
    const  { orderid } = useParams()
    console.log(orderid)
    return (
        <h1>Gracias por su compra
            Order number: {orderid}
        </h1>
        
    )
}

export default OrderBrief