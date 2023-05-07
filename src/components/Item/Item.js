function Item ({title, imgSRC, description}){
    return(
        <>
         <div className="card text-center bg-dark mw-50">
            <img className="card-img-top" src={imgSRC} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                Agregar al carrito    
                </a> 
            </div>
        </div>   
        </>        
    )
}

export default Item