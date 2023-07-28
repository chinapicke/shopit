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
import 'react-modern-drawer/dist/index.css'
import '../Assets/Styles/Shop.css'




function Shop() {

  // States //////////////////////////////////////////////////////////////
  const { products, setProducts, isLoading, serverErr, getProductsByBrand,
    getProductsByType, selectAProduct, error, filterProduct, priceRangeProducts, openFilterDrawer, filterDrawer } = useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')
  // saved icon to shaded
  const { likedIndex, changeIcon } = savedHook()

  const accordionData = [
    {
      'id': 1,
      'heading': 'Price Range',
      'content': <PriceSlider onSlider={priceRangeProducts} />
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
  const [productPerPage, setProductPerPage] = useState(40)
  const totalPageCount = Math.ceil(products.length / productPerPage);

  const handleChanges = (e) => {
    setProductPerPage(e.target.value)
    console.log(productPerPage)
  }
  const pagesVisited = currentPage * productPerPage

  // How I want the data to be shown on the page
  const displayProducts = products.slice(pagesVisited, pagesVisited + productPerPage)
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
            <img className='productImg ml-8 mb-2 md:ml-12 xl:ml-20' src={item.api_featured_image} alt={item.brand + item.product_type}></img>
            {/* To display the brand name with as sentence case */}
            <div className='productText px-2 flex flex-col content-end'>
              <p className='productType'>{item?.product_type ? item.product_type.charAt(0) + item.product_type.slice(1).toLowerCase().split('_').join(' ') : item.product_type}</p>
              <p className='productBrand'>
                {item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} </p>
              <p className='productName'>{item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
            </div>
          </Link>
          <div className='flex flex-row mt-auto mx-2 my-2'>
            <div className='mr-auto mt-auto'>
              <p className='productPrice'><span className='circleShadow '>£{Number(item.price).toFixed(2)}</span>
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
  }

  const sortThis = (e) => {
    const sorting = e.target.value
    const productList = [...products]
    const prices = productList.sort((a, b) => {
      return sorting === 'asc' ? a.price - b.price : b.price - a.price
    });

    setProducts(prices)
  }

  return (
    <>
      <div className='shopTopBanner'>
        <h1>Cosmetics for you</h1>
        <ol className='routeProductPage flex flex-row mr-2'>
          <li><Link to='/'>Home/</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
        </ol>
      </div>
      <div className='shopColumn'>
        <div className='leftShopColumn'>
          <div className='searchBar md:hidden'>
            <Searchbar
              onSearch={getProductsByBrand}
              onFilter={getProductsByType}
              onInput={filterProduct}
            />
          </div>
          <div className='productTypeButtons'>
            <OptionButtons onButton={selectAProduct} />
          </div>

          <div className='mobileSortMenu flex flex-row md:hidden'>
            <div>
              <button onClick={openFilterDrawer}>
              More Options
            </button>
            </div>
            <div className='productPerPageMobile'>
              <select
                value={productPerPage}
                onChange={handleChanges}>
                <option defaultValue>Products per page</option>
                <option value={10}>
                  10 products
                </option>
                <option value={25}>
                  25 products
                </option>
                <option value={50}>
                  50 products
                </option>
              </select>
            </div>
            <div className='sortingDropdownMobile'>
                <select onChange={sortThis}>Sort it out
                  <option defaultValue>Sort</option>
                  <option value={'asc'}>Ascending</option>
                  <option value={'desc'}>Descending</option>
                </select>
            </div>
          </div>

          {filterDrawer ?
            <>
              <Drawer
                open={filterDrawer}
                onClose={openFilterDrawer}
                direction='bottom'>
                <div className='flex flex-row'>
                  <h1>Filter and Sort </h1>
                  <h1 onClick={openFilterDrawer}>Close</h1>

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

          <div className='priceSlider hidden md:inline-block'>
            <PriceSlider
              onSlider={priceRangeProducts}></PriceSlider>
          </div>

          <div className='listOfBrands hidden md:inline-block'>
            <BrandList brandDropDown={getProductsByBrand}></BrandList>
          </div>

          <div className='sortingDropdown hidden md:inline-block'>
            <select onChange={sortThis}>Sort it out
              <option defaultValue>Sort</option>
              <option value={'asc'}>Ascending</option>
              <option value={'desc'}>Descending</option>
            </select>
          </div>

          <div className='productsPerPage hidden md:inline-block'>
            <select
              value={productPerPage}
              onChange={handleChanges}>
              <option defaultValue>Products per page</option>
              <option value={10}>
                10 products
              </option>
              <option value={25}>
                25 products
              </option>
              <option value={50}>
                50 products
              </option>
            </select>
          </div>

          <button>
            Reset filters
          </button>

        </div>

        <div className='rightShopColumn'>
          <div className='searchBar hidden md:inline-block'>
            <Searchbar
              onSearch={getProductsByBrand}
              onFilter={getProductsByType}
              onInput={filterProduct}
            />
          </div>


          {serverErr && <div>{serverErr}</div>}
          {error ? <div>{error}</div>:
                    <div>
                    {!isLoading ? <>
                      {products.length ?
                        <>
                          <div className='shopCards grid grid-cols-2 flex-wrap py-4 mr-1 md:grid-cols-4 lg:grid-cols-4'>
                            {displayProducts}
                          </div>
                          <div className='flex flex-col'>
                            <div >
                              <h1> Showing {products.length} products</h1>
                            </div>
                            <div>
                              <Pagination
                                previousLabel={'Previous page'}
                                nextLabel={'Next page'}
                                pageCount={totalPageCount}
                                pageClassName='pageNoneDisplay'
                                breakClassName='pageNoneDisplay'
                                onPageChange={changePage}
                                containerClassName={'paginationBtns py-3'}
                                previousLinkClassName={'previousBtn'}
                                nextLinkClassName={'nextBtn'}
                                disabledClassName={'paginationDisbaled'}
                                activeClassName={'paginationActive'}
                              />
                            </div>
                          </div>
                        </>
                        : <h1>No results found</h1>}
                    </> :
                      <>
                        <h1>Loading...</h1>
                      </>
                    }
                  </div >
        }
          {/* {error && <div>{error}</div>} */}
          {/* <div >
            {!isLoading ? <>
              {products.length ?
                <>
                  <div className='shopCards grid grid-cols-2 py-4 mr-1 md:grid-cols-4 lg:grid-cols-4'>
                    {displayProducts}
                  </div>
                  <div className='flex flex-col'>
                    <div >
                      <h1> Showing {products.length} products</h1>
                    </div>
                    <div>
                      <Pagination
                        previousLabel={'Previous page'}
                        nextLabel={'Next page'}
                        pageCount={totalPageCount}
                        pageClassName='pageNoneDisplay'
                        breakClassName='pageNoneDisplay'
                        onPageChange={changePage}
                        containerClassName={'paginationBtns py-3'}
                        previousLinkClassName={'previousBtn'}
                        nextLinkClassName={'nextBtn'}
                        disabledClassName={'paginationDisbaled'}
                        activeClassName={'paginationActive'}
                      />
                    </div>
                  </div>
                </>
                : <h1>No results found</h1>}
            </> :
              <>
                <h1>Loading...</h1>
              </>
            }
          </div > */}
        </div>
      </div>
    </>
  )
}


export default Shop; 