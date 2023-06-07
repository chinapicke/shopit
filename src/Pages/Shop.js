import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import Searchbar from '../Components/Searchbar';
import OptionButtons from '../Components/OptionButtons';
import { CartContext } from '../Context/Context';

function Shop() {
  // States //////////////////////////////////////////////////////////////
  // states for the default cards rendered
  const [isLoading, setIsLoading] = useState(false)
  // output of search items
  const [products, setProducts] = useState([])
  // saved icon to shaded
  const [likedIndex, setLikedIndex] = useState([])



  // Adding quantity of product cards //////////////////////////////////////////
  // const decrementCount = (index) => {
  //   // setProducts((prevState) => {
  //   //   const updatedProducts = prevState.map(e => ({ ...e }));
  //   //   // create min for the count, can not go less than 0
  //   //   // math.max() returns the value that is the smallest
  //   //   // const newCountdown = Math.max(0, updatedProducts[index].count - 1)
  //   //   // updatedProducts[index].count = newCountdown;
  //   //   // console.log(updatedProducts[index].count)
  //   //   // return updatedProducts
  //   console.log(e.index)

  //   // });
  // }


  // const incrementCount = (index) => {
  //   setProducts((prevState) => {
  //     // const updatedProducts = [...prevState];
  //     const updatedProducts = prevState.map(e => ({ ...e }));
  //     // create max for the count, can not go more than 10
  //     const newCount = Math.min(10, updatedProducts[index].count + 1)
  //     updatedProducts[index].count = newCount;
  //     // console.log('This is the count'+updatedProducts[index].count)
  //     return updatedProducts;
  //   });
  // }
  ///////////////////////////////////////////////////////////////////////


  // API calls for search bar, buttons and filter by //////////////////////////////////////////////
  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json'

  // defualt API call
  const callAPI = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(url)
      console.log(res.data)
      if (res.status === 200) {
        console.log('Success!');
        const productsWithQuantity = res.data.map((item) => ({
          ...item, quantity: 1
        }));
        setProducts(productsWithQuantity);
        setIsLoading(false)
      }
      else {
        console.log(`Server error: ${res.status}`);
      }
    } catch (err) {
      console.log(`Fetch error: ${err}`);
    }
  }

  // call when user filters by brand
  const getProductsByBrand = async (brandName) => {
    setIsLoading(true)

    try {
      const res = await axios.get(url, {
        params: {
          brand: brandName
        }
      });
      console.log(res.data)
        if (res.status === 200) {
          console.log('Success!');
          const productsWithQuantity = res.data.map((item) => ({
            ...item, quantity: 1
          }));
          setProducts(productsWithQuantity);
          setIsLoading(false)
        }
        else {
          console.log(`Server error: ${res.status}`);
        }
      }
    catch (err) {
      console.log(`Fetch error: ${err}`);
    }
  }

  // API call for the filter by button
  const getProductsByType = async (productCategory) => {
    setIsLoading(true)
    try {
      const res = await axios.get(url, {
        params: {
          product_category: productCategory
        }
      });
      console.log(res.data)
      if (res.status === 200) {
        console.log('Success!');
        const productsWithQuantity = res.data.map((item) => ({
          ...item, quantity: 1
        }));
        setProducts(productsWithQuantity);
        setIsLoading(false)

      }
      else {
        console.log(`Server error: ${res.status}`);
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
    }
  }
  // Buttons with the specific products
  const selectAProduct = async (productType) => {
    setIsLoading(true)
    try {
      const res = await axios.get(url, {
        params: {
          product_type: productType
        }
      });
      console.log(res.data)
      if (res.status === 200) {
        console.log('Success!');
        const productsWithQuantity = res.data.map((item) => ({
          ...item, quantity: 1
        }));
        setProducts(productsWithQuantity);
        setIsLoading(false)
      }
      else {
        console.log(`Server error: ${res.status}`);

      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
    }
  }

  useEffect(() => {
    callAPI()
  }, [])

  ////////////////////////////////////////////////////////////////////////

  // useContext for the add to cart 
  const Cartstate = useContext(CartContext)
  const dispatch = Cartstate.dispatch;
  // console.log(Cartstate)

  // Usecontext for the saved array as it uses a different function
  const Savestate = useContext(CartContext)
  const saveDispatch = Savestate.saveDispatch
  // console.log(Savestate)

  //////////////////////////////////////////////////////////////////////////////
  // onClick changes the heart from empty to full
  const changeIcon = (index) => {
    setLikedIndex(state => ({
      ...state, [index] // copies previous state 
        : !state[index] // updates the state by adding the index key this is how it identifies which index has been clicked
    }))
    console.log(setLikedIndex)
  }
  /////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <Searchbar onSearch={getProductsByBrand}
        onFilter={getProductsByType}
      />
      <OptionButtons onButton={selectAProduct} />
      <div className='shopCards grid grid-cols-2'>
        {/* condition that if user selects submit btn, then to show the cards with the searchProducts API if not then to show cards on start page */}
        {!isLoading ? <>
          {products.length ?
              products.map((item, index) => {
                item.quantity = 1
                return (
                  <div key={item.id}>
                    <button value={item.brand + item.product_type} onClick={() => { changeIcon(index); saveDispatch({ type: 'SAVE', saveIt: item }) }}>
                      {likedIndex[index] ?
                        (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                          </svg>
                        )
                        : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                        )
                      }

                    </button>
                    <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
                    {/* <p>{item.product_colours}</p> */}
                    {/* To display the brand name with as sentence case */}
                    <p>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
                    <p>{item?.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase()}</p>
                    <p>£{
                      // Condition if the price is 0, give it a default of '8.5'
                      (item.price === '0.0')
                        ? '8.5'
                        : item.price
                    }</p>
                    <div className='addToCart'>
                      <div className='productQuantity'>
                      </div>
                      <button onClick={() => dispatch({ type: 'ADD', payload: item })}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                )
              })
             : <h1>No results found</h1>}
        </> :
          <h1>Loading...</h1>}
      </div>
    </div >
  )
}


export default Shop