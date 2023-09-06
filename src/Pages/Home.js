import React from 'react'
import Carousel from './Carousel'
import './Home.css'
import Navbar from './Navbar';

const Home = ({ product }) => {


  const handleAddToCart = (product) => {

    console.log(product)
    fetch('http://localhost:8000/cartMedicine', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(
        (res) => {
          console.log(res)
        }
      ).catch(err => console.log(err))
    window.location.reload();
  };


  return (
    <div  >
      <Navbar />
      <Carousel />
      <div className='bg-black wrap '>
        {
          product.map((product) => (
            <article>
              <div className="bg-yellow dib grow shadow-5  br3 pa3  tc mt4">
                <img alt="robots" src={product.image} style={{ width: "300px", height: '300px' }} />
                <div >
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                </div>
                <button className='button-19' onClick={() => handleAddToCart(product)}> Add to cart</button>

              </div>
            </article>

          ))
        }
      </div>
    </div>
  )
}

export default Home


