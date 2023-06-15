import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function CartWidget(){

  const { countItem } = useContext(cartContext)
  if (countItem === null) {
    return (
      <Link to="/cart">
        <div>🛒</div>
      </Link>
      )
  } else {
    return (
      <Link to="/cart">
        <div>🛒{countItem()}</div>
      </Link>
    )
  }
       
}

export default CartWidget