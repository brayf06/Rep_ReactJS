import ItemCount from "../ItemCount/ItemCount"
import withConsoleLog from "../HOC/HOC"

function ItemDetail ({item}){
    return(
        <>
        <div className="card entrada__box detail__box">
        <div className="card text-center bg-dark mw-50 img_size ">
        <img className="card-img-top" src={item.imagen} alt="ciudad_img"/>
        <div className="card-body text-light" >
          <h2 className="card-title">{item.pais} - {item.ciudad}</h2>
          <h3 className="card-text text-secondary">{item.descripcion}</h3>
          <h4 className="card-text">${item.precio}</h4>
          <ItemCount stock={item.stock}/>
          <br></br>
          <a href="#!" className="btn btn-outline-secondary rounded-0"> Agregar al carrito </a> 
        </div>
      </div>     
    </div>    
        
        </>        
    )
}
const WrappedComponent = withConsoleLog(ItemDetail);
export default WrappedComponent