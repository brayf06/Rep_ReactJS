import React from 'react'
import Item from './Item'

function Items(){
    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <Item />
                </div>
                <div className='col-md-4'>
                    <Item />
                </div>
                <div className='col-md-4'>
                    <Item />
                </div>
            </div>
            
        </div>
    )
}

export default Items