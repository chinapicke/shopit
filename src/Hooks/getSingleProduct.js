import { useEffect, useState } from "react"
import axios from 'axios'

const GetSingleProduct = (url) => {
    const [isLoading, setIsLoading] = useState(false)
    // output error code
    const [error, setError] = useState(false)
  
    const [singleProduct, setSingleProduct] = useState([])
  
    useEffect(() => {
      const singleAPI = async (url) => {
        // useCallback means that the API call will not be made everytime we make a change to the page e.g. reviewing a products info
        // useCallback means that the API call will only be called when it needs to be e.g. on page refresh. we use useCallback instead of useMemo as we want the function to be returned and not just the value
        setIsLoading(true)
        try {
          const res = await axios.get(url)
          if (res.status === 200) {
            console.log('Success!');
            const productWithQuantity = {...res.data, quantity:1}
            setSingleProduct(productWithQuantity);
          }
          else {
            console.log(`Server error: ${res.status}`);
          }
        } catch (err) {
          console.log(`Fetch error: ${err}`)
          setError(err.message);
          ;
        }
        finally {
          setIsLoading(false)
        }
      }
      singleAPI(url)
    }, [url]);
  
  
    return {
      isLoading,
      error, 
      singleProduct
    }
  
  }
  
  export default GetSingleProduct