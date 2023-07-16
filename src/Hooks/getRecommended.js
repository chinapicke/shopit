import { useEffect, useState } from "react"
import axios from 'axios'

const GetRecommended = (url) => {
    const [recommended, setRecommended] = useState([])
    useEffect(() => {
        const getRecommendedProducts = async (url) => {
            // useCallback means that the API call will not be made everytime we make a change to the page e.g. reviewing a products info
            // useCallback means that the API call will only be called when it needs to be e.g. on page refresh. we use useCallback instead of useMemo as we want the function to be returned and not just the value
            try {
                const res = await axios.get(url)
                if (res.status === 200) {
                    console.log('Success!');
                    
                    // empty array to push the random numbers to 
                    // adds 4 random numbers to the empty array
                   
                    // converts prices that are set to 0.0 by the API and adds quantity of 1 to eahc object in the data array
                    const productsWithQuantity = res.data.map((item) => {
                        return (
                            item.price === '0.0' || item.price === null ? { ...item, price: 8.50, quantity: 1 } : { ...item, quantity: 1 }
                        )
                    })
                    setRecommended(productsWithQuantity);
                }
                else {
                    console.log(`Server error: ${res.status}`);
                }
            } catch (err) {
                console.log(`Fetch error: ${err}`);
            }
        }
        getRecommendedProducts(url)
    }

, [url]);


    return {
        recommended,
    }
}

export default GetRecommended