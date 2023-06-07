import React from 'react'
import { useContext } from "react"
import { CartContext } from '../Context/Context';

function Saved() {
  const SaveState = useContext(CartContext);
  const savedState = SaveState.savedState;

  return (
    <div>
      {savedState.map((item, index) => {
        return(
        <div className='savedCard grid grid-cols-2' key={index}>
          <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
          {/* To display the brand name with as sentence case */}
          <p>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
          <p>{item?.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase()}</p>
          <p>£{item.price}</p>
        </div>
      )})}

      </div>
  )

}

export default Saved