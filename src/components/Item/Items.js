import { useEffect, useS, useState } from 'react'

import React from 'react'
import Item from './Item'
import data from "../data/data"

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

function Items(){
    let [items, setItems] = useState([])

    useEffect( () => {
        getData().then((respuesta) => {
            setItems(respuesta)
        })
    }, [])

    return (
        <div className='container container-md d-flex justify-content-center ' >
            <div className='row'>
                {
                    data.map(item => (
                        <div className='col-md-4' key={item.id} style={{padding:"10px"}}>
                        <Item title={item.ciudad} imgSRC={item.imagen} principales_atracciones={item.principales_atracciones} price={item.precio} stock={item.stock}/>
                        </div>
                    ))
                }
                </div>
            </div>
    )
}

export default Items