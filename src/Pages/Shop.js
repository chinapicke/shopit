import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import Searchbar from '../Components/Searchbar';

function Shop() {
  // states for the default cards rendered
  const [isLoading, setIsLoading] = useState(true)
  // output of search items
  const [products, setProducts] = useState([])

  const decrementCount = (index) => {
    setProducts((prevState) => {
      const updatedProducts = prevState.map(e => ({ ...e }));
      // create min for the count, can not go less than 0
      // math.max() returns the value that is the smallest
      const newCountdown = Math.max(0, updatedProducts[index].count - 1)
      updatedProducts[index].count = newCountdown;
      return updatedProducts
    });
  }

  const incrementCount = (index) => {
    setProducts((prevState) => {
      // const updatedProducts = [...prevState];
      const updatedProducts = prevState.map(e => ({ ...e }));
      // create max for the count, can not go more than 10
      const newCount = Math.min(10, updatedProducts[index].count + 1)
      updatedProducts[index].count = newCount;
      // console.log('This is the count'+updatedProducts[index].count)
      return updatedProducts;
    });
  }


  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json'

  const callAPI = async () => {
    try {
      const res = await axios.get(url)
      console.log(res.data)
      if (res.status === 200) {
        console.log('Success!');
        const productsWithCount = res.data.map((item) => ({
          ...item, count: 1
        }));
        setProducts(productsWithCount);
      }
      else {
        console.log(`Server error: ${res.status}`);
      }
    } catch (err) {
      console.log(`Fetch error: ${err}`);
    }
  }

  useEffect(() => {
    callAPI()
  }, [])

  const getProductsByBrand = async (brandName) => {
    try {
      const res = await axios.get(url, {
        params: {
          brand: brandName
        }
      });
      console.log(res.data)
      if (res.status === 200) {
        console.log('Success!');
        const productsWithCount = res.data.map((item) => ({
          ...item, count: 1
        }));
        setProducts(productsWithCount);

      }
      else {
        console.log(`Server error: ${res.status}`);
        setIsLoading(false)
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
      setIsLoading(false)
    }
  }

    const getProductsByType = async (filteredOut) => {
      try {
        const res = await axios.get(url, {
          params: {
            product_type: filteredOut
          }
        });
        console.log(res.data)
        if (res.status === 200) {
          console.log('Success!');
          const productsWithCount = res.data.map((item) => ({
            ...item, count: 1
          }));
          setProducts(productsWithCount);

        }
        else {
          console.log(`Server error: ${res.status}`);
          setIsLoading(false)
        }
      }
      catch (err) {
        console.log(`Fetch error: ${err}`);
        setIsLoading(false)
      }
    }

    
    return (
      <div>
        <Searchbar onSearch={getProductsByBrand} 
        onFilter={getProductsByType}
        />
        <div className='shopCards grid grid-cols-2'>
          {/* condition that if user selects submit btn, then to show the cards with the searchProducts API if not then to show cards on start page */}
          {!isLoading && <h2>Error</h2>}
          {products.map((item, index) => {
            return (
              <div key={item.id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
                {/* <p>{item.product_colours}</p> */}
                {/* To display the brand name with as sentence case */}
                <p>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
                <p>{item?.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase()}</p>
                <p>£{item.price}</p>
                <div className='addToCart'>
                  <div className='productQuantity'>
                    <button onClick={() => incrementCount(index)} value={item.id}>
                      +
                    </button>
                    <p>{item.count}</p>
                    <button onClick={() => decrementCount(index)}>
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