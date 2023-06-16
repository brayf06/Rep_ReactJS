import ItemCount from "../ItemCount/ItemCount"
import withConsoleLog from "../HOC/HOC"
import { Link } from "react-router-dom";

function ItemDetail ({item , onAddToCart, countInCart}){
    return(
        <>
        <div className="card entrada__box detail__box">
        <div className="card text-center bg-dark mw-50 img_size ">
        <img className="card-img-top" src={item.imagen} alt="ciudad_img"/>
        <div className="card-body text-light" >
          <h2 className="card-title">{item.pais} - {item.ciudad}</h2>
          <h3 className="card-text text-secondary">{item.descripcion}</h3>
          <h4 className="card-text">${item.precio}</h4>
          {countInCart === 0 ? (
            <ItemCount onAddToCart={onAddToCart} stock={item.stock}/>
          ) : (
            <Link to="/cart" className="card-text text-secondary"><span>Ir al carrito</span></Link>
          )}
          
        </div>
      </div>     
    </div>    
      </>        
    )
}
const WrappedComponent = withConsoleLog(ItemDetail);
export default WrappedComponent