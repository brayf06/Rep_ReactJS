import React from 'react'
import Item from './Item'
import ItemCount from "../ItemCount/ItemCount"

import image1 from './img/asia.jpg'
import image2 from './img/caribe.jpg'
import image3 from './img/europa.jpg'

const items = [
    {
        id: 1,
        title: "Descubre Asia",
        description: "Descubre algunos de los mejores turismos en Asia al mejor precio, solicita cotizacion agregando el item al carrito",
        price: 4500,
        image: image1
    },
    {
        id: 2,
        title: "Viaje al Caribe",
        description: "Disfruta de las playas paradisiacas del caribe al mejor precio, solicita cotizacion agregando el item al carrito",
        price: 1500,
        image: image2
    },
    {
        id: 3,
        title: "Conoce Europa",
        description: "Conoce algunas de las mejores ciudades europeas del mundo al mejor precio, solicita cotizacion agregando el item al carrito:",
        price: 2500,
        image: image3
    }
]

function Items(){
    return (
        <div className='container d-flex justify-content-center align-items-center p-5'>
            <div className='row'>
                {
                    items.map(item => (
                        <div className='col-md-4' key={item.id}>
                        <Item title={item.title} imgSRC={item.image} description={item.description} price={item.price} stock={5}/>
                        </div>
                    ))
                }
                </div>
            </div>
    )
}

export default Items