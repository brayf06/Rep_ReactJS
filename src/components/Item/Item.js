import ItemCount from "../ItemCount/ItemCount"

function Item ({title, imgSRC, description, price}){
    return(
        <>
         <div className="card text-center bg-dark mw-50">
            <img className="card-img-top" src={imgSRC} alt=""/>
            <div className="card-body text-light">
                <h2 className="card-title">{title}</h2>
                <p className="card-text text-secondary">{description}</p>
                <h4 className="card-text">${price}</h4>
                <ItemCount stock={5}/>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                Ver detalle    
                </a> 
                <br></br>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                Agregar al carrito    
                </a> 
            </div>
        </div>   
        </>        
    )
}

export default Item