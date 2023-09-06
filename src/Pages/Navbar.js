import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
 import logo from '../Images/logo.png'


const Navbar = () => {
  const [count, setCount] = useState()
  const navigate = useNavigate();
  //count api 
  useEffect(() => {
    fetch('http://localhost:8000/cartMedicine/count')
      .then((res) => {
        res.json().then((result) => {
          console.log(result.Cartmed)
          setCount(result.Cartmed)
        })
      }).catch(err => console.log(err))

    const token = localStorage.getItem('token')
  }, [])

  //logout 
  const logout = (e) => {

    alert('you are out bro..')
    window.localStorage.clear();
    navigate('/')

  }


  return (
    <div >

      <nav className="flex justify-between bb" style={{ background: "black" }}>
        <img src={logo} height='90px' width='190px' />
          <svg
            className="dib h1 w1"
            data-icon="grid"
            viewBox="0 0 32 32"
            style={{ fill: "currentcolor" }}>
            <title>Super Normal Icon Mark</title>
            <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10
                         20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z
                           M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
            </path>
          </svg>
       

        <div className="flex-grow pa3 flex items-center">
          <a className="f6 link dib white dim mr3 mr4-ns" href="/dashboard">Home</a>
          <a className="f6 link dib white dim mr3 mr4-ns" href="/pro"><div className='yellow pl3'>({count})</div><FaCartPlus className='f4' /></a>
          <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" onClick={logout}>Logout</a>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Navbar