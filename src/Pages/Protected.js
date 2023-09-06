import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Comp}=props
    console.log(Comp)
    const nav=useNavigate();
    useEffect(()=>{
        const login=localStorage.getItem('token')
        // console.log(localStorage)
        if(!login){
            nav('/')
            console.log("hi");
        }
    })
  return (
    <div>
        Protected
        <Comp/>
    </div>
  )
}

export default Protected