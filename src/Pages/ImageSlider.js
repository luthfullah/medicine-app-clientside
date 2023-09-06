import React, { useState, useEffect } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import './ImageSlider.css'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    //css styling
    const sliderstyles={
        height: '100%',
        position: 'relative',
        
    }
    const styless={
              
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        borderPosition: 'center',
        borderSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const rightarrow={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    const leftarrow={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    const dotsContainerStyles={
        display: "flex",
        justifyContent: "center"
        
    }
    const dotStyles={
        margin: "10 10px",
        marginTop: "20px",
        cursor: "pointer",
        fontSize: "20px"
    }

    //go to previous and next arrows code
    const goToPrevious=()=>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext=()=>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    //TIMER IN CAROUSEL, SLIDER CODE
    useEffect(() => {
        const timer = setInterval(() => {
          // Calculate the next index
          const nextIndex = (currentIndex + 1) % slides.length;
          setCurrentIndex(nextIndex);
        }, 5000); // Change the interval duration as needed (in milliseconds)
    
        return () => {
          clearInterval(timer); // Clean up the timer when the component unmounts
        };
      }, [currentIndex, slides.length]);

// const goToSlide=(slideIndex)=>{
    // setCurrentIndex(slideIndex)
// }


  return (
    <div style={sliderstyles} >
        <div style={leftarrow} onClick={goToPrevious}><AiOutlineLeft/></div>
        <div style={rightarrow} onClick={goToNext}><AiOutlineRight /></div>
        <div className='wrap' style={styless}></div>
        <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex)=>(
                <div key={slideIndex} style={dotStyles} ><GoDotFill/></div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider