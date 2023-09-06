import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Admin from './Admin/component/Admin';
import GetAllmedi from './Admin/component/GetAllmedi';
import Edit from './Admin/component/Edit'
import { AddressForm, Error, SignIn, SignUp, Home, ShoppingCart } from './Pages'
import Newlist from './Admin/component/Newlist';




function App() {
  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/medicine')
      .then((res) => {
        res.json().then((result) => {
          setproducts(result.medi)

        })
      }).catch(err => console.log(err))
  }, [])



  return (
    <div style={{ textAlign: 'center' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path="/dashboard" element={<Home product={products} />} />
          <Route path="/adminpanel" element={<Admin />} />
          <Route path='/pro' element={<ShoppingCart />} />
          <Route path='/addressform' element={<AddressForm />} />
          <Route exact path='/getallmedi' element={<GetAllmedi />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/newlist' element={<Newlist />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
