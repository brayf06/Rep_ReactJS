import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function CartWidget(){

  const { countItem } = useContext(cartContext)
  
    return (
      <Link to="/cart">
        <span>🛒{countItem()}</span>
      </Link>
    )
  }
       


export default CartWidget