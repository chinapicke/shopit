// const url = 'https://makeup-api.herokuapp.com/api/v1/products.json'
import { useEffect, useState } from "react"
import axios from 'axios'


const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  // output of search items
  const [products, setProducts] = useState([])

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
      }
      else {
        console.log(`Server error: ${res.status}`);
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
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
        const productsWithQuantity = res.data.map((item) => ({
          ...item, quantity: 1
        }));
        setProducts(productsWithQuantity);
      }
      else {
        console.log(`Server error: ${res.status}`);
      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
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
        const productsWithQuantity = res.data.map((item) => ({
          ...item, quantity: 1
        }));
        setProducts(productsWithQuantity);
      }
      else {
        console.log(`Server error: ${res.status}`);

      }
    }
    catch (err) {
      console.log(`Fetch error: ${err}`);
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
        console.log(res.data)
        if (res.status === 200) {
          console.log('Success!');
          const productsWithQuantity = res.data.map((item) => ({
            ...item, quantity: 1
          }));
          setProducts(productsWithQuantity);
        }
        else {
          console.log(`Server error: ${res.status}`);
        }
      } catch (err) {
        console.log(`Fetch error: ${err}`);
      }
      finally {
        setIsLoading(false)
      }
    }
    getAPI(url)
  }, [url]);

  return {
    isLoading,
    products,
    getProductsByBrand,
    getProductsByType,
    selectAProduct
  }

}

export default useAxios