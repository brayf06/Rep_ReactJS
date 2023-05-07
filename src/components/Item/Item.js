import image1 from './img/asia.jpg'

function Item (props){
    return(
        <>
         <h1>{props.textoRecibido}</h1>
         <div className="card text-center bg-dark ">
            <img src={image1} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title">Titulo</h4>
                <p className="card-text text-secondary">lorem</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                Agregar al carrito    
                </a> 
            </div>
        </div>   
        </>        
    )
}

export default Item