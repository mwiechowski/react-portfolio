import { useEffect, useState } from "react";
import { arrowUpCircle } from "../assets";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    },[])

    return (
        <img 
            src={arrowUpCircle}
            className={`fixed cursor-pointer object-contain sm:right-2 sm:bottom-2 sm:w-12 sm:h-12 w-10 h-10 right-2 bottom-4 arrowUp transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
        />
    )
}

export default ScrollToTop