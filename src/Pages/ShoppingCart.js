import React, { useEffect, useState } from 'react'
import OrderNow from './OrderNow';



const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([])
  const [count, setCount] = useState()

//cartmedi addtocart items that user select
  useEffect(() => {

    fetch('http://localhost:8000/cartMedicine')
      .then((res) => {
        res.json().then((result) => {

          console.log(result.Cartmedi)
          setCartItems(result.Cartmedi)

        })
      }).catch(err => console.log(err))

  }, [])
//get count
useEffect(() => {

  fetch('http://localhost:8000/cartMedicine/count')
    .then((res) => {
      res.json().then((result) => {

        console.log(result.Cartmed)
        setCount(result.Cartmed)

      })
    }).catch(err => console.log(err))

}, [])

  // delete product
  const delet = (id) => {
    // alert(id);
    fetch(`http://localhost:8000/cartMedicine/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      res.json().then((result) => {
        console.log("Your Record is Deletedddd....", result)
        window.location.reload();
      })
    }).catch(err => console.log(err))
  }

  const onCheckboxChange =(id,price,name)=>{
    let val;
      console.log(id,price,name);
       val+= price;
      console.log(val);
   
    // console.log(e.target.value);
  }



  return (
    <div >
      <nav className="flex justify-between items-center bg-yellow black pa3">
      <h1 className="f3 ma0">Your medicines list</h1>

      {/* ordernow component */}
     <OrderNow/>
    </nav>

      <div>
        <h1>{count}</h1>
      </div>
      {
        cartItems.map((product) => (

          <article style={{ marginLeft: '5px', marginTop: '25px', display: 'inline-block', marginBottom: '5px' }}
           className=" center btn bg-yellow p6   ">
            <input type='checkbox'   onChange={() => onCheckboxChange(product._id,product.price,product.name)} />
            <img src={product.image} className="db w-100 br2 br--top " alt="pic of a kitten looking menacing." width='250px' height='250px' />
            
            <div className='black f3  '>
            <p className='tr'> Price: Rs{product.price}</p>
             <h2 className='tl'>{product.name}</h2>
             <p className='tl f5'>{product.description}</p>
            </div>
            <button className='btn bg-blue' onClick={e => delet(product._id)} > Remove</button>
              
          </article>
        ))
      }
    </div>
  );
};

export default ShoppingCart