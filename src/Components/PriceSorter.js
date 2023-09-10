import useAxios from "../Hooks/useAxios"

export const PriceSorter = ({ onSlider }) => {

    
    const { minValueLg,
        setMinValueLg,
        maxValueLg,
        setMaxValueLg } = useAxios()
 

    const showNumberInserted = () => {
        console.log(minValueLg, maxValueLg)
        onSlider(minValueLg, maxValueLg)
        
    }


    return (
        <div className="priceSorterDiv ">
            <h1 className='font-semibold pl-2 my-3 text-sm'>price range</h1>
            <div className="grid grid-cols-3 mx-2 my-2 mt-5">
                <form className="flex flex-col" >
                    <input text='number' className="minPriceInput py-1 px-1 text-center mb-2" placeholder="£12" value={minValueLg} onChange={(e)=>setMinValueLg(e.target.value)}/>
                    <h1 className="minPriceInputLabel text-center text-slate-400">min.</h1>
                </form>
                <div className="yellowLine">
                    <hr></hr>
                </div>
                <form className="flex flex-col">
                    <input text='number' className="maxPriceInput bg-white py-1 px-0.5 text-center mb-2" placeholder="£70" value={maxValueLg} onChange={(e)=>setMaxValueLg(e.target.value)}/>
                    <h1 className="maxPriceInputLabel text-center text-slate-400">max.</h1>
                </form>
            </div>
            <div className="flex justify-center">
            <button className='priceSortLgBtn px-2 py-1 rounded-md mb-2' onClick={showNumberInserted}>Filter prices</button>
            </div>
        </div>
    )
}
