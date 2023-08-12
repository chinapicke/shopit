// const url = 'https://makeup-api.herokuapp.com/api/v1/products.json'
import { useEffect, useState } from "react"
import axios from 'axios'

// custom hooks keeps code from stopping to be repeated, only maintaining the code in one place rather than in different places
const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  // output of search items
  const [products, setProducts] = useState([])
  // output error code
  const [error, setError] = useState(false)

  const [serverErr, setServerErr] = useState(false)

  const [singleProduct, setSingleProduct] = useState([])


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
        const productsWithQuantity = res.data.map((item)=>{
          return(
          item.price === '0.0' || item.price === null ? {...item, price:8.50, quantity:1} :{...item, quantity:1}
        )})
        setProducts(productsWithQuantity);
      }
      else {
        setServerErr(`Server error: ${res.status}`);
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
      setError(err.message,': we having some issues with our server to show you our products')
    }
    finally {
      setIsLoading(false)
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
        // adds a quantity of 1 to each object within the array of data from the api 
        const productsWithQuantity = res.data.map((item)=>{
          return(
          item.price === '0.0' || item.price === null ? {...item, price:8.50, quantity:1} :{...item, quantity:1}
        )})
        setProducts(productsWithQuantity);
      }
      else {
        console.log()
        setServerErr(`Server error: ${res.message} `);
      }
    }
    catch (err) {
      setError(err.message,': we having some issues with our server to show you our products')

    }
    finally {
      setIsLoading(false)
    }
  }

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
        const productsWithQuantity = res.data.map((item)=>{
          return(
          item.price === '0.0' || item.price === null ? {...item, price:8.50, quantity:1} :{...item, quantity:1}
        )})
        setProducts(productsWithQuantity);
      }
      else {
        setServerErr(`Server error: ${res.status}`);

      }
    }
    catch (err) {
      setError(err.message,': we having some issues with our server to show you our products')
    }
    finally {
      setIsLoading(false)
    }
  }

  const filterProduct = async (searched) => {
    setIsLoading(true)
      try {
        const res = await axios.get(url)
        if (res.status === 200) {
          console.log('Success!');
          const productsWithQuantity = res.data.map((item) => ({
            ...item, quantity: 1
          }));
          const keyWord = searched
          let filteredInput = productsWithQuantity.filter(e => Object.values(e).map(e => String(e).toLowerCase()).some(e => e.includes(keyWord)));
          console.log(filteredInput);
          setProducts(filteredInput)
        } 
        else {
          setServerErr(`Server error: ${res.status}`);
        }
      } catch (err) {
        console.log(`Fetch error: ${err}`);
        setError(err.message,': we having some issues with our server to show you our products')

      }
      finally {
        setIsLoading(false)
      }
    }

 



   

  useEffect(() => {
    const getAPI = async (url) => {
  
      // useCallback means that the API call will not be made everytime we make a change to the page e.g. reviewing a products info
      // useCallback means that the API call will only be called when it needs to be e.g. on page refresh. we use useCallback instead of useMemo as we want the function to be returned and not just the value
      setIsLoading(true)
      try {
        const res = await axios.get(url)
        if (res.status === 200) {
          console.log('Success!');
          // converts prices that are set to 0.0 by the API and adds quantity of 1 to eahc object in the data array
          const productsWithQuantity = res.data.map((item)=>{
            return(
            item.price === '0.0' || item.price === null ? {...item, price:8.50, quantity:1} :{...item, quantity:1}
          )})
          setProducts(productsWithQuantity);
          console.log(productsWithQuantity)

        }
        else {
          setServerErr(`Server error: ${res.status}`);
        }
      } catch (err) {
        setError(err.message,': we having some issues with our server to show you our products')

      }
      finally {
        setIsLoading(false)
      }
    }
    getAPI(url)
  }, [url]);
 
  useEffect(() => {
    const singleAPI = async (url) => {
      // useCallback means that the API call will not be made everytime we make a change to the page e.g. reviewing a products info
      // useCallback means that the API call will only be called when it needs to be e.g. on page refresh. we use useCallback instead of useMemo as we want the function to be returned and not just the value
      setIsLoading(true)
      try {
        const res = await axios.get(url)
        if (res.status === 200) {
          console.log('Success!');
          const verifiedPrice = res.data.map((item)=>{
            return(item.price === '0.0' || item.price === null ? {...item, price:8.50, quantity:1} :{...item, quantity:1}
          )})
          console.log(verifiedPrice)
          setSingleProduct(verifiedPrice);
        }
        else {
          setServerErr(`Server error: ${res.status}`);
        }
      } catch (err) {
        setError(err.message,': we having some issues with our server to show you our products')
      }
      finally {
        setIsLoading(false)
      }
    }
    singleAPI(url)
  }, [url]);

  
  // state for slider and API call
  const [minValue2, setMinValue2] = useState(17);
  const [maxValue2, setMaxValue2] = useState(77);


  const priceRangeProducts = async (min, max) => {
    setIsLoading(true)
    try {
      const res = await axios.get(url, {
        params: {
          price_greater_than: min,
          price_less_than: max
        }
      });
      console.log(res.data)
      if (res.status === 200) {
        console.log('Success!');
        const productsWithQuantity = res.data.map((item)=>{
          return(
          item.price === '0.0' || item.price === null ? {...item, price:8.50, quantity:1} :{...item, quantity:1}
        )})
        setProducts(productsWithQuantity);
      }
      else {
        setServerErr(`Server error: ${res.status}`)
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
      setError(err.message,': we having some issues with our server to show you our products')
    }
    finally {
      setIsLoading(false)
    }
  }



  const [filterDrawer, setFilterDrawer] = useState(false)

  const openFilterDrawer = () => {
    setFilterDrawer(current => !current)
  }

  return {
    isLoading,
    products,
    getProductsByBrand,
    getProductsByType,
    selectAProduct,
    error,
    singleProduct,
    setProducts,
    setServerErr,
    setIsLoading,
    serverErr,
    filterProduct,
    maxValue2,
    setMaxValue2,
    minValue2, 
    setMinValue2,
    priceRangeProducts,
    filterDrawer,
    openFilterDrawer,
    setFilterDrawer,
    refreshProducts
    }

}

export default useAxios 
