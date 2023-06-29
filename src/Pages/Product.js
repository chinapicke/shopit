// ? use the index to show the correct page on what has been picked 
// ? onClick to send to a new page 

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import GetSingleProduct from '../Hooks/getSingleProduct'
import { AppContext } from '../Context/Context'
import '../Assets/Styles/Product.css'

function Product() {
  // able to use useParams to direct to the page with the id of the product that has been clicked
  const { id } = useParams()
  const { singleProduct, isLoading, error } = GetSingleProduct(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
  const [clickedColour, setClickedColour] = useState([])

  // const disablePlusBtn = () => {
  //   singleProduct.quantity === 10 || singleProduct.quantity === 0 ?
  //     <button className='cursor-not-allowed'>+</button> && setDisableBtn(true)
  //     : <button onClick={handleIncrement}>+</button>
  // }


  // useContext for the add to cart 
  const Cartstate = useContext(AppContext)
  const dispatch = Cartstate.dispatch;

  const handleColour = (index) => {
    setClickedColour(prevstate =>
    ({
      ...prevstate, [index] // copies prev state
        : !prevstate[index]
    }))
    console.log(setClickedColour)
  }

  const [newQuantity, setNewQuantity] = useState({ singleProduct })
  const handleIncrement = () => {
    setNewQuantity({ ...singleProduct, quantity: Math.max(10, singleProduct.quantity++) })
  }
  const handleDecrement = () => {
    setNewQuantity({ ...singleProduct, quantity: Math.min(0, singleProduct.quantity--) })
  }


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
        {error && <div>{error}</div>}
        {isLoading ?
          (<div>Loading...</div>) :
          <div id={singleProduct.id}>
            <img src={singleProduct.api_featured_image} alt={singleProduct.product_type}></img>
            <p>{singleProduct?.product_type ? singleProduct.product_type.charAt(0).toUpperCase() + singleProduct.product_type.slice(1).toLowerCase().split('_').join(' ') : singleProduct.product_type}</p>

            <h1>{singleProduct?.brand ? singleProduct.brand.charAt(0).toUpperCase() + singleProduct.brand.slice(1).toLowerCase() : singleProduct.brand} {singleProduct?.name ? singleProduct.name.charAt(0).toUpperCase() + singleProduct.name.slice(1).toLowerCase() : singleProduct.name}</h1>
            <h2> £{singleProduct.price==='0.0'||singleProduct.price === null ? '8.50': Number(singleProduct.price).toFixed(2)}</h2>
            <h3>{singleProduct.description}</h3>
            {/* {singleProduct.map(colour => 
            <h1>{colour.product_colors}</h1>)} */}
            <div className="colourList grid grid-cols-4">
              {singleProduct.product_colors?.map((colour, index) => {
                return (
                  <button onClick={() => handleColour(index)} className='colourItem' key={index} style={{ backgroundColor: colour.hex_value }}>
                    {colour.hex_value}
                    {clickedColour[index] ?
                      (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      ) : (null)}
                  </button>
                )
              })}
            </div>
            <div className='counter'>
              {/* <button onClick={() => dispatch({ type: 'PLUSPRODUCT', payload: singleProduct })}> */}
              <button onClick={handleIncrement} disabled={singleProduct.quantity >= 10}>
                +
              </button>
              <p>{singleProduct.quantity}</p>
              <button onClick={handleDecrement} disabled={singleProduct.quantity <= 0}>
                -
              </button>

            </div>
            <button onClick={() => dispatch({ type: 'ADD', payload: singleProduct })}>Add to basket</button>
          </div>
        }
      </div >
    </>
  )
}

export default Product