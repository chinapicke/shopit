import React from 'react'
import GetTopPicks from '../Hooks/getTopPicks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'
import savedHook from '../Hooks/savedHook'


function TopPicks() {
  const { topPick } = GetTopPicks('https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.9')
  const { likedIndex, changeIcon } = savedHook()


  // filter function, filter through topPick and if item has same id, return it 
  const filterById = topPick.filter(item => {
    return item.id === 495 || item.id === 140 || item.id === 310 || item.id === 402
  })


  const Savestate = useContext(AppContext)
  const saveDispatch = Savestate.saveDispatch

  const Cartstate = useContext(AppContext)
  const dispatch = Cartstate.dispatch;
  // console.log(filterById)
  // console.log(topPick)
  // id  492, 140, 310, 402
  return (
    <>
      <div className="headerTopPicks grid grid-cols-2 pt-4">
        <h1 className='topPickHeader'>Our Top Picks!</h1>
        <button className='topPicksSeeBtn'> See more</button>
      </div>
      <div className='topPicks grid grid-cols-2 py-4 px-6 md:grid-cols-4 lg:grid-cols-4'>
        {filterById.map((item, index) => {
          return (
            <div className='topProductCard h-full flex flex-col border mx-1 ' key={item.id}>
              < button value={item.brand + item.product_type} onClick={() => { changeIcon(index); saveDispatch({ type: 'SAVE', saveIt: item }) }}>
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
                    {/* <p className='topPickNumber align-text-bottom'>£{Number(item.price).toFixed(2)
                    }</p> */}
                </div>
              </Link>
              <div className='flex flex-row mt-auto mx-2 my-2'>
              <div className='mr-auto mt-auto'>
              <p className='topPickNumber '><span className='circleShadow'>£</span>{Number(item.price).toFixed(2)
                    }</p>
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