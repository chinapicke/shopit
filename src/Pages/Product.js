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
        {isLoading ?
          (<div>Loading...</div>) :
          <div>
            <img src={singleProduct.api_featured_image} alt={singleProduct.brand + singleProduct.product_type}></img>
            <p>{singleProduct?.product_type ? singleProduct.product_type.charAt(0).toUpperCase() + singleProduct.product_type.slice(1).toLowerCase().split('_').join(' ') : singleProduct.product_type}</p>

            <h1>{singleProduct?.brand ? singleProduct.brand.charAt(0).toUpperCase() + singleProduct.brand.slice(1).toLowerCase() : singleProduct.brand} {singleProduct?.name ? singleProduct.name.charAt(0).toUpperCase() + singleProduct.name.slice(1).toLowerCase() : singleProduct.name}</h1>
            <h2> £{
              // Condition if the price is 0, give it a default of '8.5' 
              (singleProduct.price === '0.0')
                ? '8.5'
                : singleProduct.price
            }</h2>
            <h3>{singleProduct.description}</h3>
            <div className='counter'>
              <button>
                +
              </button>
              <p>1</p>
              <button>
                -
              </button>
            </div>
            <button>Add to basket</button>
          </div>
        }
          </div >
    </>
      )
}

      export default Product