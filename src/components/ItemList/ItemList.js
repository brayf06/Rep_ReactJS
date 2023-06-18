import withConsoleLog from "../HOC/HOC"
import Button from "../Boton/boton";
import { Link } from "react-router-dom";
import "./Item.css"

function Item ({title, imgSRC, principales_atracciones, price, stock, id}){
    return(
        <>
        <div className="card text-center bg-dark">
            <img className="card-img-top imagen__box" src={imgSRC} alt="ciudad_img"/>
            <div className="card-body text-light">
                <h2 className="card-title">{title}</h2>
                <p className="card-text text-secondary">Sus principales atracciones son: {principales_atracciones}</p>
                <h4 className="card-text">${price}</h4>
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