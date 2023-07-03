import Brushes from '../Assets/Images/brushes.png';

function HomepageText() {
  return (
    <div className='homepageText grid grid-cols-2 gap-4'>
        <div className='homepageTextPhoto'>
            <img src={Brushes} alt='Sephora brushes' />
        </div>
        <div className='homepageTextRightSide'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default HomepageText