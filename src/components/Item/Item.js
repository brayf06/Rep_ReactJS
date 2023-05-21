import ItemCount from "../ItemCount/ItemCount"

function Item ({title, imgSRC, principales_atracciones, price, stock}){
    return(
        <>
         <div className="card text-center bg-dark mw-50">
            <img className="card-img-top" src={imgSRC} alt="ciudad_img"/>
            <div className="card-body text-light" >
                <h2 className="card-title">{title}</h2>
                <p className="card-text text-secondary">Sus principales atracciones son: {principales_atracciones}</p>
                <h4 className="card-text">${price}</h4>
                <ItemCount stock={stock}/>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                Ver mas detalles    
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