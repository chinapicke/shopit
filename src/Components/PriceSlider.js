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
      <h1>Select Price</h1>
      <div className='sliderContainer grid grid-cols-3'>
        <div className="divOutput">
          <span>{minValue2}</span>
          <p>min</p>
        </div>

        <div className="slider md:w-1/5">
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
        <div className="divOutput">
            <span>{maxValue2}</span>
            <p>max</p>
        </div>
        <button onClick={sliderNumbers}>Submit</button>
      </div>
    </div>
  )
}

export default PriceSlider