import { useParams } from "react-router-dom"
import "./OrderBrief.css"

function OrderBrief(){
    const  {orderid} = useParams()
    return (
        <>
        <div class="swal-icon swal-icon--success">
            <span class="swal-icon--success__line swal-icon--success__line--long"></span>
            <span class="swal-icon--success__line swal-icon--success__line--tip"></span>
            <div class="swal-icon--success__ring"></div>
            <div class="swal-icon--success__hide-corners"></div>
        </div>
        <h1 className="texto_main">Gracias por su compra</h1>
        <h4 className="texto_sec">Orden número: {orderid}</h4>
        </>
       
        
    )
}

export default OrderBrief