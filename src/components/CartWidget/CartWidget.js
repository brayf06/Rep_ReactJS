import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function CartWidget(){

  const { countItem } = useContext(cartContext)
  
  if (countItem()===0){
    return (
      <Link to="/cart">
        <span>🛒</span>
      </Link>
    )
  }
  return(
    <Link to="/cart">
        <span>{countItem()}🛒</span>
    </Link>
  )
  }
       


export default CartWidget