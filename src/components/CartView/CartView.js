import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import "./cart.css";
import Button from "../Boton/boton"
import { createOrderWithStockUpdate } from "../../services/firebase";
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

function CartView(){

const navigateTo = useNavigate()
const { cart, removeItem, countTotalPrice, clearCart} = useContext(cartContext)  

async function handleConfirm(){
  const order = {
    items: cart,
    buyer: {
      nombre: "Bryan",
      telefono: 123456,
      mail: "brayan@prueba",
    },
    fecha: new Date(),
    precio: countTotalPrice(),
  }
  
  try{
    const id = await (createOrderWithStockUpdate(order))
    clearCart()
    navigateTo(`/confirmation/${id}`)
  }
  catch(error)
  {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    })
  }
}


let total = 0
    return (
        <>

      <h1 className="main">Resumen de su reserva</h1>

      <table className="cart">
        <thead className="cart__header">
          <tr className="cart__row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cart__row">
              <td>
                <img height={90} src={item.imagen} alt={item.ciudad} />
              </td>
              <td>{item.pais} - {item.ciudad}</td>
              <td>$ {item.precio}</td>
              <td>{item.count}</td>
              <th>${((item.precio * item.count)).toFixed(2)}</th>
              <td>
                <Button className="btn rounded-0" onClick={() => removeItem(item.id)}>
                  X
                </Button>
              </td>
            </tr>
            
            
          ))}
        </tbody>
      </table>

      <div className="cart__detalle">
      <h4>El total de tu compra es de $ {countTotalPrice()}</h4>
      <Button className="btn rounded-0" onClick={() => clearCart()}>Limpiar carrito</Button>
      <Button onClick={handleConfirm}>Crear orden</Button>
        {/* <CheckoutForm onConfirm={handleConfirm} /> */}
      </div>
    </>
    )
}

export default CartView