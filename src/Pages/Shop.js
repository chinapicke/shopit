import { useState, useContext } from 'react';
import Searchbar from '../Components/Searchbar';
import OptionButtons from '../Components/OptionButtons';
import { CartContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
// import Modal from '../Components/Modal';
// import Product from './Product';
import { Link } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import PriceSlider from '../Components/PriceSlider';


function Shop() {
  // States //////////////////////////////////////////////////////////////
  const { products, isLoading, getProductsByBrand, getProductsByType, selectAProduct, error} = useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')
  // saved icon to shaded
  const [likedIndex, setLikedIndex] = useState([])


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
  // const [productOpen, setProductOpen] = useState(false)
  // const [showModal, setShowModal] = useState([])

  // const openModal = (index) => {
  //   setProductOpen(true)
  //   setShowModal(index)
  // }

  // const closeModal = (index) => {
  //   setProductOpen(false)
  //   // setShowModal(index)
  // }
  // const handleClose = () => setProductOpen(false);
  // const handleOpen = (index) => {
  //   console.log('modal is opened')
  //   setProductOpen(true);
  // }
  /////////////////////////////////////
  return (
    <div>
      <Searchbar 
      onSearch={getProductsByBrand}
        onFilter={getProductsByType}
      />
      <PriceSlider ></PriceSlider>
      <OptionButtons onButton={selectAProduct} />
      <div className='shopCards grid grid-cols-2'>
        {error && <div>{error}</div>}
        {!isLoading ? <>
          {products.length ?
            products.map((item, index) => {
              return (
                <div className='singleCard' key={item.id}>
                  {/* /* onClick={()=>openInformation(index)}>
                  {showInfo===index && <Product productName={item.brand+item.product_type}/>} */ }
                  < button value={item.brand + item.product_type} onClick={() => { changeIcon(index); saveDispatch({ type: 'SAVE', saveIt: item }) }}>
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
                  <Link to={`/product/${item.id}`} name={item.brand} >
                    <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
                    {/* To display the brand name with as sentence case */}
                    <p>
                      {item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
                    <p>{item.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase().split('_').join(' ')}</p>
                    <p>£{
                      // Condition if the price is 0, give it a default of '8.5' 

                      (item.price === '0.0')? '8.50'
                      // converts all numbers to 2 decimal places
                        : Number(item.price).toFixed(2)
                    }</p>
                  </Link>

                  {/* Removed modal */}
                  {/* <button onClick={()=>openModal(index)}>Show modal</button>
                  {productOpen && index === showModal && <Product close={()=>closeModal()}/>} */}

                  <div className='addToCart'>
                    <div className='productQuantity'>
                    </div>
                    <button onClick={() => dispatch({ type: 'ADD', payload: item })}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                    </button>
                  </div>
                </div>
              )
            })
            : <h1>No results found</h1>}
        </> :
          <h1>Loading...</h1>
        }
      </div >
    </div >
  )
}


export default Shop