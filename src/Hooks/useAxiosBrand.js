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
