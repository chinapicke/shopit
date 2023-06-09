// ? use the index to show the correct page on what has been picked 
// ? onClick to send to a new page 

import React from 'react'
import { useParams } from 'react-router-dom'

function Product(props) {
    const{id}=useParams()
  return (
    <div className='productInfo'>
        {/* <h1 className='productName'>{props.name}</h1> */}
        <p>This is info about the product- product id {id}</p>
    </div>
  )
}

export default Product