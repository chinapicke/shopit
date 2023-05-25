import React from 'react'
import { useState } from 'react';

function Shop() {

  const [product, setProduct]= useState([])

  const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

  async function callAPI() {
    try {
      const request = await fetch(url);
      // console.log(request)
      if (request.status === 200) {
        console.log('Success!')
        const response = await request.json();
        console.log(response)
        setProduct(response)
      } else {
        console.log(`Server error: ${request.status}`)
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`)
    }
  }

  return (
    <div>
      <button onClick={callAPI}>Click to get API</button>
      <div className='shopCards grid grid-cols-6'>
        {
          product.map((item)=>{
            return(
              <div>
                <img src={item.api_featured_image} key={item.id}></img>
              </div>
            )
          }

          )
        }

      </div>
    </div>
  )
}

export default Shop