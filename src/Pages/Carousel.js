import React from 'react'
import ImageSlider from './ImageSlider'


const Carousel = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: require("../Images/pic1.jpg"), title: 'beach' },
    { url: require("../Images/pic2.jpg"), title: 'beach' },
    { url: require("../Images/pic3.jpg"), title: 'beach' },
    { url: require("../Images/pic4.jpg"), title: 'beach' },
    { url: require("../Images/pic5.jpg"), title: 'beach' },
    { url: require("../Images/pic6.jpg"), title: 'beach' },

  ]


  const containerStyle = {
    width: '1000px',
    height: '500px',
    margin: ' auto',

    padding: "20px",
    paddingBottom: "30px",
    backgroundColor: 'yellow',




  }
  return (

    <div className='' style={containerStyle} >
      <ImageSlider slides={slides} />
    </div>


  )
}

export default Carousel