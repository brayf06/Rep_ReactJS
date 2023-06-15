import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import "./cart.css";
import Button from "../Boton/boton"


function CartView(){

const { cart, removeItem, countTotalPrice, clearCart} = useContext(cartContext)  
let total = 0
    return (
        <>

      <h1 className="main">Carrito</h1>

      <table className="cart">
        <thead className="cart__header">
          <tr className="cart__row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
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
        {/* <CheckoutForm onConfirm={handleConfirm} /> */}
      </div>
    </>
    )
}

export default CartView