import ItemCount from "../ItemCount/ItemCount"
import withConsoleLog from "../HOC/HOC"
import Button from "../Boton/boton";
import { Link } from "react-router-dom";

function Item ({title, imgSRC, principales_atracciones, price, stock, id}){
    return(
        <>
        <div className="card text-center bg-dark mw-50">
            <img className="card-img-top" src={imgSRC} alt="ciudad_img"/>
            <div className="card-body text-light" >
                <h2 className="card-title">{title}</h2>
                <p className="card-text text-secondary">Sus principales atracciones son: {principales_atracciones}</p>
                <h4 className="card-text">${price}</h4>
                <ItemCount stock={stock}/>
                <br></br>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                Agregar al carrito    
                </a>
                <br></br>
                <Link to={`/destino/${id}`}>
                    <Button>Ver detalle</Button>    
                </Link>    
            </div>
        </div>   
        
        </>        
    )
}
const WrappedComponent = withConsoleLog(Item);
export default WrappedComponent