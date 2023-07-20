// ? use the index to show the correct page on what has been picked 
// ? onClick to send to a new page 

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import GetSingleProduct from '../Hooks/getSingleProduct'
import { AppContext } from '../Context/Context'
import '../Assets/Styles/Product.css'
import FooterIcons from '../Components/Banners/FooterIcons'
import Recommended from '../Components/Recommended'
import savedHook from '../Hooks/savedHook'




function Product() {
  // able to use useParams to direct to the page with the id of the product that has been clicked
  const { id } = useParams()
  const { singleProduct, isLoading, error } = GetSingleProduct(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
  const [clickedColour, setClickedColour] = useState([])
  const { likedIndex, changeIconProduct } = savedHook()
  const  [hover, setHover] = useState({});
  // const [isShown, setIsShown] = useState(false);



  // const disablePlusBtn = () => {
  //   singleProduct.quantity === 10 || singleProduct.quantity === 0 ?
  //     <button className='cursor-not-allowed'>+</button> && setDisableBtn(true)
  //     : <button onClick={handleIncrement}>+</button>
  // }

  const Savestate = useContext(AppContext)
  const saveDispatch = Savestate.saveDispatch

  // useContext for the add to cart 
  const CartState = useContext(AppContext);
  const dispatch = CartState.dispatch;

  const handleColour = (index) => {
    setClickedColour(prevstate =>
    ({
      ...prevstate, [index] // copies prev state
        : !prevstate[index]
    }))
    console.log(setClickedColour)
  }


    const mouseOver = (event, index) => {
      setHover(c => {
          return {
              ...c,
              [index]: true
          };
      })
  }

  const mouseOut = (event, index) => {
      setHover(c => {
          return {
              ...c,
              [index]: false
          };
      })
  }

  return (
    <>
      <div className='routeTaken'>
        <h1>{singleProduct?.brand ? singleProduct.brand.charAt(0).toUpperCase() + singleProduct.brand.slice(1).toLowerCase() : singleProduct.brand} {singleProduct?.name ? singleProduct.name.charAt(0).toUpperCase() + singleProduct.name.slice(1).toLowerCase() : singleProduct.name}</h1>
        <ol className='flex flex-row'>
          <li><Link to='/'>Home/</Link></li>
          <li><Link to='/shop'>Shop/</Link></li>
          <li>Current page</li>
        </ol>
      </div>
      <div className='productInfo'>
        {error && <div>{error}</div>}
        {isLoading ?
          (<div>Loading...</div>) :
          <div id={singleProduct.id} className='productPageCard relative ml-2 mr-8 md:grid grid-cols-2'>
            <div className='flex justify-center my-3 md:mr-1 lg:mr-0'>
              <img className='productPageImg' src={singleProduct.api_featured_image} alt={singleProduct.product_type}></img>
            </div>
            <div >
              < button className='my-1 flex flex-row' value={singleProduct.brand + singleProduct.product_type} onClick={() => { changeIconProduct(); saveDispatch({ type: 'SAVE', saveIt: singleProduct }) }}>
                {likedIndex ?
                  (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#b8b4b4" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <h1 className='heartIconCaption'>add to favourites</h1>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="redHeart w-6 h-6"> add to favourites
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                      <h1 className='heartIconCaption'>add to favourites</h1>
                    </>
                  )

                }
              </button>
              <p className='productPageType'>{singleProduct?.product_type ? singleProduct.product_type.charAt(0).toUpperCase() + singleProduct.product_type.slice(1).toLowerCase().split('_').join(' ') : singleProduct.product_type}</p>
              <h1 className='productPageNameBrand '>{singleProduct?.brand ? singleProduct.brand.charAt(0).toUpperCase() + singleProduct.brand.slice(1).toLowerCase() : singleProduct.brand} {singleProduct?.name ? singleProduct.name.charAt(0).toUpperCase() + singleProduct.name.slice(1).toLowerCase() : singleProduct.name}</h1>
              <div className='flex flex-row pb-3 justify-between'>
                <div className="priceShadow absolute rounded-full mt-4"></div>
                <h2 className='productPrice mt-4'> £{singleProduct.price === '0.0' || singleProduct.price === null ? '8.50' : Number(singleProduct.price).toFixed(2)}</h2>
                <button className='addBasketProductPage mt-2 mr-2 text-sm text-black px-2 py-3 rounded-full ml-auto mr-4 md:mr-10 md:py-2 lg:mr-12 lg:py-4 lg:px-4' type="button" onClick={() => dispatch({ type: 'ADD', payload: singleProduct })}>add to basket</button>
              </div>
              <h3 className='productPageDescriptionTitle'>Description</h3>
              <h4 className='productPageDescription mb-3 '>{singleProduct.description}</h4>
              {/* {singleProduct.map(colour => 
            <h1>{colour.product_colors}</h1>)} */}
              <div className="colourList grid grid-cols-5 justify-items-center md:mr-3">
                {singleProduct.product_colors?.map((colour, index) => {
                  return (
                    <>
                      <button onClick={() => handleColour(index)}
                        onMouseEnter={(e) => {
                             mouseOver(e, index);
                        }} 
                        onMouseLeave={(e) => {
                        mouseOut(e, index);}}
                        className='colourItem mb-10 flex flex-row justify-center' key={index} style={{ backgroundColor: colour.hex_value }}>
                          {/* hover over to show colour name */}
                          {hover[index]?
                          (<h1 className='hoverColour flex justify-center '>{colour.colour_name}</h1>):null}
                        {clickedColour[index] ?
                        <>
                          (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          )</> : (null)}
                      </button>

                    </>
                  )
                })}
              </div>
            </div>
          </div>
        }
      </div >
      <div>
        <FooterIcons />
      </div>
      <div>
        <Recommended />
      </div>
    </>
  )
}

export default Product