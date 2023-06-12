// ? use the index to show the correct page on what has been picked 
// ? onClick to send to a new page 

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import GetSingleProduct from '../Hooks/getSingleProduct'

function Product() {
  const { id } = useParams()
  const { singleProduct, isLoading, error } = GetSingleProduct(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)

  return (
    <>
      <div className='routeTaken'>
        <ol>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li>Current page</li>
        </ol>
      </div>
      <div className='productInfo'>
        <p>This is info about the product- product id {id}</p>
        {isLoading && <div className='loadingMsg'>Loading</div>}
        {error && <div>{error}</div>}
        {singleProduct && <div className='productSection'>
          <h1>{singleProduct.data.name}</h1>
          </div>}
        
      </div>
    </>
  )
}

export default Product