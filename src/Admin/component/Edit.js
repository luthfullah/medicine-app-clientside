import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const [values,setValues]=useState({
        name:'',
        description:'',
        price:'',
        image:''

    })

    const {id}= useParams();
    console.log(id);
    useEffect(() => {
        GetAllmedi();
    }, [])

    //get specific medicine id, api
    function GetAllmedi() {
        fetch(`http://localhost:8000/medicine/${id}`).then((res) => {
            res.json()
                .then((result) => {
                    console.log(result.medi);
                    setValues(result.medi)
                    // setGetMedi(result.medi)
                })
        }).catch(err => console.log(err))
    }
    
    //put api for updating values
    function update(id){
        // alert(id);
        fetch(`http://localhost:8000/medicine/${id}`,{
            method:'PUT',
            headers:{
                'accept':'application.json',
                'content-type':'application/json'
            },
            body:JSON.stringify(values)
        }).then((res) => {
            res.json()
                .then((result) => {
                    console.log("Data updated Successfullly....",result.medi);
                    setValues({name:'',description:'' ,print:'',image:''})
                })
        }).catch(err => console.log(err))

    }
  return (
    <form className="pa6 bg-washed-green measure center mt3 w-200"  >
      <div className="mb3">
        <label htmlFor="fullName" className="db fw6 lh-copy f6">Medicine Name</label>
        <input
          type="text"
          name="name"
          className="pa2 input-reset ba bg-transparent w-100"
        value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}

        />
      </div>
      <div className="mb3">
        <label htmlFor="address" className="db fw6 lh-copy f6">Medicine Description</label>
        <input
          type="text"
          name="description"
          className="pa2 input-reset ba bg-transparent w-100"
          value={values.description} onChange={e => setValues({ ...values, description: e.target.value })}


        />
      </div>
      <div className="mb3">
        <label htmlFor="email" className="db fw6 lh-copy f6">Medicine Price</label>
        <input
          type="number"
          name="number"
          value={values.price} onChange={e => setValues({ ...values, price: e.target.value })}

        />
      </div>
      <div className="mb3">
        <label htmlFor="number" className="db fw6 lh-copy f6">Medicine Image</label>
        <input
          type="text"
          name="image"
          value={values.image} onChange={e => setValues({ ...values, image: e.target.value })}


        />
      </div>
      {/* Repeat similar code for other address fields */}
      <div className="mv3">
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6" type="submit"
        onClick={e=>update(values._id)}>Update Medicine</button>
      </div>
    </form>
  )
}

export default Edit