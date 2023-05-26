import React from 'react'
import { useState } from 'react';

function Shop() {

  const [product, setProduct] = useState([])

  const decrementCount = (index) => {
    setProduct((prevState) => {
      const updatedProducts = [...prevState];
      // create min for the count, can not go less than 0
      const newCount = Math.max(0, updatedProducts[index].count - 1)
      updatedProducts[index].count = newCount;
      return updatedProducts
    });

  }
  const incrementCount = (index) => {
    setProduct((prevState)=>{
    const updatedProducts = [...prevState];
    // create max for the count, can not go more than 10
    const newCount = Math.min(10, updatedProducts[index].count + 1)
    updatedProducts[index].count = newCount;
    return updatedProducts
  }
    )};



  const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

  async function callAPI() {
    try {
      const request = await fetch(url);
      if (request.status === 200) {
        console.log('Success!');
        const response = await request.json();
        // this spreads the items from the response call and adds a count of 1 to each card/image
        const productsWithCount = response.map((item) => ({
          ...item, count:1
          
        }));
        setProduct(productsWithCount);
      } else {
        console.log(`Server error: ${request.status}`);
      }
    } catch (err) {
      console.log(`Fetch error: ${err}`);
    }
  }

  return (
    <div>
      <button onClick={callAPI}>Click to get API</button>
      <div className='shopCards grid grid-cols-5'>
        {
          product.map((item, index) => {
            return (
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <img src={item.api_featured_image} key={item.id}></img>
                <div className='addToCart'>
                  <div className='productQuantity'>
                    <button onClick={()=>incrementCount(index)} value={item.id}>
                      +
                    </button>
                    <p>{item.count}</p>
                    <button onClick={()=>decrementCount(index)}>
                      -
                    </button>
                  </div>
                  <button>
                    Add to cart
                  </button>
                </div>
              </div>
            )
          }

          )
        }

      </div>
    </div >
  )
}

export default Shop