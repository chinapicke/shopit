import { useState, useEffect } from "react"

const ScrollToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() =>{

        window.addEventListener('scroll', () => {
            if (window.scroll > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })}, 0);
    }, []);

    const goTop = () => {
        window.scrollTo(0,0)
    };

    return (
        <div>
            {!isVisible && (
            <button className="toTopBtn bg-red-500 border-4" onClick={goTop}>
                X
            </button>

            )}
        </div>

    )
}

export default ScrollToTopBtn