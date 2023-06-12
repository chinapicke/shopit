// ? use the index to show the correct page on what has been picked 
// ? onClick to send to a new page 

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import GetSingleProduct from '../Hooks/getSingleProduct'

function Product() {
  // able to use useParams to direct to the page with the id of the product that has been clicked
  const { id } = useParams()
  const { singleProduct, isLoading, error } = GetSingleProduct(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)

  console.log(singleProduct)

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
          {/* <p>{singleProduct?.data.product_type ? singleProduct.data.product_type.charAt(0).toUpperCase() + singleProduct.data.product_type.slice(1).toLowerCase().split('_').join(' '): singleProduct?.data.product_type}</p> */}
          {/* <h1>{singleProduct.name}</h1> */}
          <p>{singleProduct.data.product_type}</p>
          <h1>{singleProduct.data.name}</h1>

        </div>
        }
      </div>
    </>
  )
}

export default Product