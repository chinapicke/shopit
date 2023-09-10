import { useContext, useState } from 'react';
import Searchbar from '../Components/Searchbar';
import OptionButtons from '../Components/OptionButtons';
import { AppContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import savedHook from '../Hooks/savedHook';
import PriceSlider from '../Components/PriceSlider';
import BrandList from '../Components/BrandList';
import Pagination from 'react-paginate'
import Drawer from 'react-modern-drawer'
import Accordion from '../Components/Accordion';
import GlossierSet from '../Assets/Images/glossierSet.png'
import { SpinnerCircular } from 'spinners-react';
import { PriceSorter } from '../Components/PriceSorter';
import { useRef } from 'react';
import 'react-modern-drawer/dist/index.css'
import '../Assets/Styles/Shop.css'




function Shop() {

  // States //////////////////////////////////////////////////////////////
  const { products, setProducts, isLoading, serverErr, getProductsByBrand,
    getProductsByType, selectAProduct, error, filterProduct, priceRangeProducts, openFilterDrawer, filterDrawer, resetFilters, setFilterDrawer } = useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')
  // 'https://makeup-api.herokuapp.com/api/v1/products.json'
  // saved icon to shaded
  const { likedIndex, changeIcon } = savedHook()

  const accordionData = [
    {
      'id': 1,
      'heading': 'Price Range',
      'content': <PriceSlider setFilterDrawer={setFilterDrawer} onSlider={priceRangeProducts} />
    },
    {
      'id': 2,
      'heading': 'Brand',
      'content': <BrandList brandDropDown={getProductsByBrand} />
    }
  ]

  // useContext for the add to cart 
  const Cartstate = useContext(AppContext)
  const dispatch = Cartstate.dispatch;

  // Usecontext for the saved array as it uses a different function
  const Savestate = useContext(AppContext)
  const saveDispatch = Savestate.saveDispatch


  // pagination 
  // set to 0 because if I set it to 1 then it doesn't show all the data
  const [currentPage, setCurrentPage] = useState(0)
  const [productPerPage, setProductPerPage] = useState(30)
  const pageCount = Math.ceil(products.length / productPerPage)

  const handleItemsPerPage = (e) => {
    setProductPerPage(parseInt(e.target.value))
  }


  const offSet = currentPage * productPerPage


  // How I want the data to be shown on the page
  const displayProducts = products.slice(
    offSet, offSet + productPerPage
  )
    .map((item, index) => {
      return (
        <div className='singleCard h-full flex flex-col mx-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300 hover:shadow-lg' key={item.id}>
          < button className='mx-1 my-1' value={item.brand + item.product_type} onClick={() => { changeIcon(index); saveDispatch({ type: 'SAVE', saveIt: item }) }}>
            {likedIndex[index] ?
              (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="redHeart w-6 h-6">
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
            <img className='productImg ml-8 mb-2 md:ml-8 xl:ml-14' src={item.api_featured_image} alt={item.brand + item.product_type}></img>
            {/* To display the brand name with as sentence case */}
            <div className='productText px-2 flex flex-col content-end md:px-1 '>
              <p className='productType'>{item?.product_type ? item.product_type.charAt(0) + item.product_type.slice(1).toLowerCase().split('_').join(' ') : item.product_type}</p>
              <p className='productBrand'>
                {item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} </p>
              <p className='productName'>{item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
            </div>
          </Link>
          <div className='flex flex-row mt-auto mx-2 my-2'>
            <div className='mr-auto mt-auto'>
              <p className='productPriceShop'><span className='circleShadow '>£{Number(item.price).toFixed(2)}</span>
              </p>
            </div>
            <div className='addToCart ml-auto mt-auto '>
              <button className='basketProduct' onClick={() => dispatch({ type: 'ADD', payload: item })}>
                <FontAwesomeIcon icon={faBasketShopping} />
              </button>
            </div>
          </div>
        </div>
      )
    })

  // calucates total pages need for all the data with how many items to be shown each page
  // Math.ceil rounds the number of pages to a whole integer
  //callback function invoked with the updated page value when the page is changed.
  const changePage = ({ selected }) => {
    setCurrentPage(selected)
    // console.log(offSet)

  }

  const sortThis = (e) => {
    const sorting = e.target.value
    const productList = [...products]
    const prices = productList.sort((a, b) => {
      return sorting === 'asc' ? a.price - b.price : b.price - a.price
    });

    setProducts(prices)
  }

  const footerRef = useRef();
  const largePageRef = useRef();


  setTimeout(() => {
    footerRef.current?.scrollIntoView({ behavior: "smooth"});
    largePageRef.current?.scrollIntoView({ behavior: "smooth"})

  }, 1000);
  /////////////////////////////////////////

  ////////////////////////

  return (
    <>
      <div ref={largePageRef} className='shopTopBanner flex md:mx-6'>
        <div className='shopTopBannerText flex-col pl-3 mt-5'>
          <h1 className='text-white'>Cosmetics for you!</h1>
          <ol className='routeShopPage flex flex-row mr-2 text-white text-sm font-light font-bold'>
            <li><Link to='/'>Home/</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
          </ol>
        </div>
        <div className='flex'>
          <img className='shopBannerImg' src={GlossierSet} alt='glosierSet'></img>
        </div>
      </div>
      <div className='shopColumn'>
        <aside className='leftShopColumn md:ml-3 top-5 pl-1'>
          <div className='searchBar md:hidden'>
            <Searchbar
              onSearch={getProductsByBrand}
              onFilter={getProductsByType}
              onInput={filterProduct}
            />
          </div>

          {/* <div className='priceSlider hidden md:inline-block '>
            <PriceSlider
              onSlider={priceRangeProducts}></PriceSlider>
          </div> */}
          <div  className='priceSorter hidden md:inline-block '>
            <PriceSorter onSlider={priceRangeProducts} />
          </div>

          <div className='productTypeButtons'>
            <OptionButtons onButton={selectAProduct} />
          </div>



          <div ref={footerRef}  className='mobileSortMenu pt-3 md:hidden'>
            <div className='flex flex-row justify-around mb-2 mr-2'>
              <div className='productPerPageMobile'>
                <select
                  className='productsSelect py-1 pl-1 rounded-full '
                  value={productPerPage}
                  onChange={handleItemsPerPage}>
                  <option className='bg-white' value={30}>Products</option>
                  <option value={5}>
                    5 products
                  </option>
                  <option value={10}>
                    10 products
                  </option>
                  <option value={20}>
                    20 products
                  </option>
                </select>
              </div>
              <div  className='sortingDropdownMobile '>
                <select className='sortSelect py-1 pl-1 rounded-full' onChange={sortThis}>Sort it out
                  <option defaultValue className='bg-white'>Sort</option>
                  <option value={'asc'}>Ascending</option>
                  <option value={'desc'}>Descending</option>
                </select>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className='moreOptionsBtn p-2 rounded-full px-3' onClick={openFilterDrawer}>
                More Options
              </button>
            </div>
          </div>

          {filterDrawer ?
            <>
              <Drawer
                open={filterDrawer}
                onClose={openFilterDrawer}
                direction='bottom'
                size='70vh'
              >
                <div className=' flex flex-row justify-center'>
                  <h1 className='text-center my-4'>FILTER & SORT</h1>
                  <button className='iconBg'>x</button>
                  <button onClick={openFilterDrawer} className='cancelFilterDrawerMobile absolute'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(253, 210, 97, 255)" className="mobileCancelBtn w-14 h-14">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </button>

                </div>
                <div className='flex flex-col'>
                  <ul className="accordion">
                    {accordionData.map(({ heading, content }) => (
                      <Accordion heading={heading} content={content} />
                    ))}
                  </ul>
                </div>
              </Drawer>
            </>
            : null}
          {/* reset filters not functioning to original default of products per page */}
          <div className='flex justify-center lg:justify-start'>
            <button className='resetBtn mt-3 font-semibold ' onClick={resetFilters}>
              Reset filters
            </button>
          </div>

        </aside>

        <div className='rightShopColumn '>
          <div className='searchBarScreenFull ml-0 hidden md:inline-block md:ml-6 md:w-11/12'>
            <Searchbar
              onSearch={getProductsByBrand}
              onFilter={getProductsByType}
              onInput={filterProduct}
            />
          </div>
          <div className='rightShopColumnTopBar grid grid-cols-3 ml-5 '>
            <div className='listOfBrands hidden md:inline-block mt-2 '>
              <BrandList brandDropDown={getProductsByBrand}></BrandList>
            </div>

            <div className='sortingDropdown hidden md:inline-block md:flex md:justify-evenly md:flex-col xl:flex-row mt-2 ml-2'>
              <label className='text-center'>sort by</label>
              <select className='rightColumSelectBanner rounded-full text-center shadow-inner p-1' onChange={sortThis}>
                <option defaultValue>price sort by</option>
                <option value={'asc'}>low to high</option>
                <option value={'desc'}>high to low</option>
              </select>
            </div>

            <div className='productsPerPage hidden md:inline-block md:flex md:justify-evenly md:flex-col xl:flex-row mt-2 ml-2'>
              <label className='text-center'>show</label>
              <select
                className='rightColumSelectBanner rounded-full text-center shadow-inner p-1'
                value={productPerPage}
                onChange={handleItemsPerPage}>
                <option defaultValue={30}>30 products</option>
                <option value={5}>
                  5 products
                </option>
                <option value={10}>
                  10 products
                </option>
                <option value={20}>
                  20 products
                </option>
              </select>
            </div>
          </div>

          {serverErr &&
            <div className='flex justify-center '>
              <div className='flex flex-col-reverse items-center'>
                <h1 className='oopsError font-bold'>Oops!</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(255, 99, 71)" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className='text-center'>
                <h2 className='mt-10 mb-2'>Server error:{serverErr}</h2>
                <p className='font-semibold'>Refresh the page and try again!</p>
              </div>
            </div>}
          {error ?
            <div className=' my-2 mt-7 md:mt-20'>
              <div className='flex flex-col-reverse items-center'>
                <h1 className='oopsError font-bold'>Oops!</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(255, 99, 71)" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className='text-center'>
                <h2 className='mt-10 mb-2'>{error}</h2>
                <p className='mb-2 px-3'>We are experiencing some server issues issues to show you our products.</p>
                <p className='font-semibold '>Refresh the page and try again!</p>
              </div>
            </div> :
            <div>
              {!isLoading ? <>
                {products.length ?
                  <>
                    <div className='shopCards grid grid-cols-2 flex-wrap py-4 xl:mr-6 md:grid-cols-4 lg:grid-cols-4'>
                      {displayProducts}
                    </div>
                    <div className='flex flex-col'>
                      {/* <div >
                        <h1> Showing
                          {offSet === 0 ? 1 : offSet} - {offSet === 0 ? 30 : offSet * 2}
                          of {products.length} products</h1>
                      </div> */}
                      <div >
                        <Pagination

                          previousLabel={'Previous page'}
                          nextLabel={'Next page'}
                          pageCount={pageCount}
                          pageClassName='pageNoneDisplay'
                          breakClassName='pageNoneDisplay'
                          onPageChange={changePage}
                          containerClassName={'paginationBtns py-3'}
                          previousLinkClassName={'previousBtn'}
                          nextLinkClassName={'nextBtn'}
                          disabledClassName={'paginationDisbaled'}
                          activeClassName={'paginationActive'}
                          pageRangeDisplayed={1}
                          marginPagesDisplayed={2}
                        />
                      </div>
                    </div>
                    <div>
                      <button>Go to top of page</button>
                    </div>
                  </>
                  :
                  <div className='flex justify-center'>
                    <h1 className='text-center ml-6 my-10 md:mt-40'>No results found</h1>
                  </div>}
              </> :
                <div className='flex justify-center md:mt-32'>
                  <SpinnerCircular
                    className='loadSpinner justify-center'
                    size={100}
                    thickness={100}
                    color='#fdd261'
                  />
                </div>
              }
            </div >
          }        </div>
      </div>
    </>
  )
}


export default Shop; 