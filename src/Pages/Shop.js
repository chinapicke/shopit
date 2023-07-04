import { useContext, useState } from 'react';
import Searchbar from '../Components/Searchbar';
import OptionButtons from '../Components/OptionButtons';
import { AppContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
// import Modal from '../Components/Modal';
// import Product from './Product';
import { Link } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import savedHook from '../Hooks/savedHook';
import PriceSlider from '../Components/PriceSlider';
import BrandList from '../Components/BrandList';
// import Sort from '../Components/Sort'
import Pagination from 'react-paginate'
import '../Assets/Styles/Shop.css'

function Shop() {
  // States //////////////////////////////////////////////////////////////
  const { products, setProducts, isLoading, serverErr, getProductsByBrand, getProductsByType, selectAProduct, error } = useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')
  // saved icon to shaded
  const { likedIndex, changeIcon } = savedHook()


  // useContext for the add to cart 
  const Cartstate = useContext(AppContext)
  const dispatch = Cartstate.dispatch;
  // console.log(Cartstate)

  // Usecontext for the saved array as it uses a different function
  const Savestate = useContext(AppContext)
  const saveDispatch = Savestate.saveDispatch
  // console.log(Savestate)

  //////////////////////////////////////////////////////////////////////////////
  // onClick changes the heart from empty to full
  // const changeIcon = (index) => {
  //   setLikedIndex(state => ({
  //     ...state, [index] // copies previous state 
  //       : !state[index] // updates the state by adding the index key this is how it identifies which index has been clicked
  //   }))
  //   console.log(setLikedIndex)
  // }
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
  // Randomly go through the array of data, this changes each time the user refreshes the page 
  //   const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  //   const randomProducts = shuffle(products)
  // //////////////////////////////////////////


  // pagination 
  // set to 0 because if I set it to 1 then it doesn't show all the data
  const [currentPage, setCurrentPage] = useState(0)
  const productPerPage = 10

  const pagesVisited = currentPage * productPerPage

  // How I want the data to be shown on the page
  const displayProducts = products.slice(pagesVisited, pagesVisited + productPerPage)
    .map((item, index) => {
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
          <Link to={`/product/${item.id}`} name={item.brand}>
            <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
            {/* To display the brand name with as sentence case */}
            <p>
              {item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
            <p>{item?.product_type ? item.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase().split('_').join(' ') : item.product_type}</p>
            <p>£{Number(item.price).toFixed(2)
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

  // calucates total pages need for all the data with how many items to be shown each page
  // Math.ceil rounds the number of pages to a whole integer
  const totalPageCount = Math.ceil(products.length / productPerPage);
  //callback function invoked with the updated page value when the page is changed.
  const changePage = ({ selected }) => {
    setCurrentPage(selected)

  }

  const sortThis = () =>{
    const prices = products.sort(function(a , b){
          if(a.price > b.price) return +1
          if(a.price < b.price) return -1
          return 0
          })
          console.log(prices)
          console.log('Sort button clicked')
            // console.log("This is sorted", prices)
            // console.log('price button clicked')
    setProducts(prices)
  }


  return (
    <div>
      <Searchbar
        onSearch={getProductsByBrand}
        onFilter={getProductsByType}
      />
      <PriceSlider ></PriceSlider>
      <BrandList brandDropDown={getProductsByBrand}></BrandList>
      {/* <Sort onSort={filterProduct}></Sort> */}
      <button onClick={sortThis}>Sort it out </button>
      <OptionButtons onButton={selectAProduct} />
      {serverErr && <div>{serverErr}</div>}
      {error && <div>{error}</div>}
      <div className='shopCards grid grid-cols-2'>
        {!isLoading ? <>
          {products.length ?
            [displayProducts]
            : <h1>No results found</h1>}
        </> :
          <h1>Loading...</h1>
        }
        
      </div >
      <Pagination
          previousLabel={'Previous page'}
          nextLabel={'Next page'}
          pageCount={totalPageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisbaled'}
          activeClassName={'paginationActive'} 
          />
    </div >
  )
}


export default Shop; 