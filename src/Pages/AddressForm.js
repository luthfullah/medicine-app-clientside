import React, { useState } from 'react';
import 'tachyons'




const AddressForm = () => {
  const [values,Setvalues]=useState({
    username :'',
    address :'',
    email :'',
    phone :''
  })


  const handleSubmit =  async (event) => {
    event.preventDefault();
    // console.log(values);
    // let data={username,address,email,phone}
    console.log(values);
   try {
    await fetch('http://localhost:8000/ordermedicine',{
      method:'POST',
      headers:{
        'accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(values)
    })
      .then((res) => {
        res.json()
          .then(
            result => {
              console.log(result);
              // window.location.reload()
            }
          )
      })
      .catch(err => console.log(err))
   Setvalues({username:'',address:'',email:'',phone:''})

   } catch (error) {
    console.log(error)
   } 


    // Perform form submission or validation here
  };

  return (
    <form className="pa6 bg-washed-green measure center mt3 w-200" onSubmit={handleSubmit}>
      <div className="mb3">
        <label htmlFor="fullName" className="db fw6 lh-copy f6">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="username"
          className="pa2 input-reset ba bg-transparent w-100" 
          onChange={e=>Setvalues({...values, username :e.target.value})}
          value={values.username}
        />
      </div>
      <div className="mb3">
        <label htmlFor="address" className="db fw6 lh-copy f6">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          className="pa2 input-reset ba bg-transparent w-100" 
          value={values.address}
          onChange={e=>Setvalues({...values, address :e.target.value})}
        />
      </div>
      <div className="mb3">
        <label htmlFor="email" className="db fw6 lh-copy f6">email</label>
        <input
          type="email"
          id="addressLine1"
          name="email"
          value={values.email}
          className="pa2 input-reset ba bg-transparent w-100" onChange={e=>Setvalues({...values, email :e.target.value})}
        />
      </div>
      <div className="mb3">
        <label htmlFor="number" className="db fw6 lh-copy f6">number</label>
        <input
          type="number"
          id="addressLine1"
          name="phone"
          value={values.phone}
          className="pa2 input-reset ba bg-transparent w-100"  onChange={e=>Setvalues({...values, phone :e.target.value})}
        />
      </div>
      {/* Repeat similar code for other address fields */}
      <div className="mv3">
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddressForm;
