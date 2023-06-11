import { useEffect, useState } from "react"
import axios from 'axios'


const useAxiosBrand = (url) => {
    const [Loading, setLoading] = useState(false)
    // output of search items
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const getProductsByBrand = async (brandName) => {
            setLoading(true)

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
                    setBrands(productsWithQuantity);
                }
                else {
                    console.log(`Server error: ${res.status}`);
                }
            }
            catch (err) {
                console.log(`Fetch error: ${err}`);
            }
            finally {
                setLoading(false)
            }
        }
        getProductsByBrand(url)
    }, [url]);

    return {
        Loading,
        brands,
    }
}

export default useAxiosBrand
