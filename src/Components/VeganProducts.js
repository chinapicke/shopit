import React from 'react'
import GetVeganProduct from '../Hooks/getVeganProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'
import savedHook from '../Hooks/savedHook'
import { useNavigate } from 'react-router-dom';
import'../Assets/Styles/Shop.css'


function TopPicks() {
  const { veganProduct } = GetVeganProduct('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan')
  const { likedIndex, changeIcon } = savedHook()

  // filter function, filter through topPick and if item has same id, return it 
  const filterById = veganProduct.filter(item => {
    return item.id ===  1043 || item.id === 5 || item.id === 1023 || item.id === 308
  })

  const navigate = useNavigate();
  const shopNavTopPicks = () => {
    navigate('/shop')
  }

  const Savestate = useContext(AppContext)
  const saveDispatch = Savestate.saveDispatch

  const Cartstate = useContext(AppContext)
  const dispatch = Cartstate.dispatch;
  return (
    <>
          <div className="headerTopPicks flex flex-row pt-4">
        <h1 className='topPickHeader text-2xl'>Popular Vegan</h1>
        <button onClick={shopNavTopPicks} className='topPicksSeeBtn text-sm text-black px-2 md:py-4 px-6 rounded-full ml-auto mr-4' type="button"> See more</button>
      </div>
      <div className='topPicks grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-4'>
        {filterById.map((item, index) => {
          return (
            <div className='topProductCard h-full flex flex-col mx-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300 hover:shadow-lg ' key={item.id}>
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
                <img className='topPickImage ml-8 mb-2 md:ml-12 xl:ml-20' src={item.api_featured_image} alt={item.brand + item.product_type}></img>
                {/* To display the brand name with as sentence case */}
                <div className='topPickText px-2 flex flex-col content-end'>
                  <p className='topPickProductType'>{item.product_type ? item.product_type.charAt(0) + item.product_type.slice(1).toLowerCase().split('_').join(' ') : item.product_type}</p>
                  <p className='topPickBrand'>
                    {item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} </p>
                  <p className='topPickName'>{item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
                </div>
              </Link>
              <div className='flex flex-row mt-auto mx-2 my-2'>
                <div className='mr-auto mt-auto'>
                  <p className='topPickNumber'><span className='circleShadow '>£{Number(item.price).toFixed(2)}</span>
                  </p>
                </div>
                <div className='addToCart ml-auto mt-auto '>
                  <button className='basketTopPicks ' onClick={() => dispatch({ type: 'ADD', payload: item })}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                  </button>
                </div>
              </div>
            </div>

          )
        }
        )}
      </div >
    </>
  )
}

export default TopPicks