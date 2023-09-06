import React, { useState } from 'react';
import 'tachyons'




const FormMedi = () => {

  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  })
  
  const handler = async (e) => {
    e.preventDefault();
    console.log(values);
    await fetch('http://localhost:8000/medicine', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((res) => {
      res.json().then(result => {
        console.log(result);
        setValues({ name: '', description: '', price: '', image: '' })
      })
    }).catch(err => console.log(err))
  }




  return (
    <form className="pa6  bg-yellow measure center mt3 w-200" onSubmit={handler} >
      <div className="mb3">
        <label htmlFor="fullName" className="db fw6 lh-copy black f4">Medicine Name</label>
        <input
          type="text"
          name="name"
          className="pa2 input-reset ba bg-transparent w-100"
          value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}

        />
      </div>
      <div className="mb3">
        <label htmlFor="address" className="db fw6 lh-copy black f4">Medicine Description</label>
        <input
          type="text"
          name="description"
          className="pa2 input-reset ba bg-transparent w-100"
          value={values.description} onChange={e => setValues({ ...values, description: e.target.value })}


        />
      </div>
      <div className="mb3">
        <label htmlFor="email" className="db fw6 lh-copy black f4">Medicine Price</label>
        <input
        className='pa2 bg-yellow'
          type="number"
          name="number"
          value={values.price} onChange={e => setValues({ ...values, price: e.target.value })}

        />
      </div>
      <div className="mb3">
        <label htmlFor="number" className="db fw6 lh-copy black f4">Medicine Image</label>
        <input
          className='pa2 bg-yellow'
          type="text"
          name="image"
          value={values.image} onChange={e => setValues({ ...values, image: e.target.value })}


        />
      </div>
      {/* Repeat similar code for other address fields */}
      <div className="mv3">
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6" type="submit">Send Medicine</button>
      </div>
    </form>
  );
};

export default FormMedi;
