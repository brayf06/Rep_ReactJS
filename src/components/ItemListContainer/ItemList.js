import Item from "../Item/Item";
import Flex from "../Flex/Flex";

function ItemList({ city }) {
  return (
    <div>
      <Flex>
      <div className='container container-md d-flex justify-content-center ' >
            <div className='row'>
                {
                    city.map(item => (
                        <div className='col-md-4' style={{padding:"10px"}}>
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