import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import Loader from "../Loader/Loader"

function ItemList({ city }) {

  if (city.length === 0) return <Loader />

  return (
    <div>
      <Flex>
      <div className='container container-md d-flex justify-content-center ' >
            <div className='row'>
                {
                    city.map(item => (
                      <div key={item.id} className='col-md-4' style={{padding:"10px"}}>
                      <Item key={item.id} id={item.id} title={item.ciudad} imgSRC={item.imagen} principales_atracciones={item.principales_atracciones} price={item.precio} stock={item.stock} />                        
                      </div>
                    )) 
                }
            </div>
      </div>
      </Flex>
    </div>
  );
}

export default ItemList;