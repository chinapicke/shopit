import { useEffect, useState } from "react"
import axios from 'axios'

const GetTopPicks = (url) => {
    const [topPick, setTopPick] = useState([])
    useEffect(() => {
        const getTopProducts = async (url) => {
            // useCallback means that the API call will not be made everytime we make a change to the page e.g. reviewing a products info
            // useCallback means that the API call will only be called when it needs to be e.g. on page refresh. we use useCallback instead of useMemo as we want the function to be returned and not just the value
            try {
                const res = await axios.get(url)
                if (res.status === 200) {
                    console.log('Success!');
                    // converts prices that are set to 0.0 by the API and adds quantity of 1 to eahc object in the data array
                    const productsWithQuantity = res.data.map((item) => {
                        return (
                            item.price === '0.0' || item.price === null ? { ...item, price: 8.50, quantity: 1 } : { ...item, quantity: 1 }
                        )
                    })
                    setTopPick(productsWithQuantity);
                }
                else {
                    console.log(`Server error: ${res.status}`);
                }
            } catch (err) {
                console.log(`Fetch error: ${err}`);
            }
        }
        getTopProducts(url)
    }
        , [url]);


    return {
        topPick
    }
}

export default GetTopPicks