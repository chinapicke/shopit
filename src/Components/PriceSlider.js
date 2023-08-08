import MultiRangeSlider from "multi-range-slider-react";
import useAxios from '../Hooks/useAxios';


const PriceSlider = ({ onSlider }) => {

  const sliderNumbers = () => {
    console.log(minValue2, maxValue2)
    onSlider(minValue2, maxValue2)
  }
  const { minValue2, setMinValue2, maxValue2, setMaxValue2,} = useAxios()


  return (
    <div className='priceSlider'>
      <h1 className='font-semibold pl-2 my-3 text-sm'>select price</h1>
      <div className='sliderContainer grid grid-cols-3'>
        <div className="divOutput ml-1 md:ml-1 mt-3">
          <span className='bg-white px-3 py-2 text-xs'>{minValue2}</span>
          <p className='text-xs pl-2 pt-1'>min.</p>
        </div>

        <div className="slider">
          <MultiRangeSlider
            passive={true}
            onChange={(e) => {
              setMinValue2(e.minValue);
              setMaxValue2(e.maxValue)
                ;
            }}
            min={1}
            max={77}
            step={1}
            ruler='false'></MultiRangeSlider>
          </div>
        <div className="divOutput ml-3 md:ml-0 mr-1 mt-3">
            <span className='bg-white px-3 py-2 text-xs'>{maxValue2}</span>
            <p className='text-xs pl-1 pt-1'>max.</p>
        </div>
      </div>
      <div className='flex justify-center'>
      <button className='pt-3 text-xs pb-1 font-semibold 'onClick={sliderNumbers}>Submit</button>
      </div>
    </div>
  )
}

export default PriceSlider