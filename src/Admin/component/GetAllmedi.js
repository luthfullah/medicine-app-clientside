import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './GetAllMedi.css'

const GetAllmedi = () => {
    const [getmedi, setGetMedi] = useState([]);
    const [msg,setmsg]=useState('')
    useEffect(() => {
        GetAllmedi();
    }, [])
    function GetAllmedi() {
        fetch('http://localhost:8000/medicine').then((res) => {
            res.json()
                .then((result) => {
                    console.log(result.medi);
                    setGetMedi(result.medi)
                })
        }).catch(err => console.log(err))
    }

    function delet(id){
        alert(id)
        fetch(`http://localhost:8000/medicine/${id}`,{
            method:'Delete'
        }).then((res) => {
            res.json()
                .then((result) => {
                    console.log("Delete Item Successfully.....",result);
                    // alert(result)
                    setmsg("Item Successfully Deleted.....")
                    GetAllmedi();
                })
        }).catch(err => console.log(err))
    }

    return (
        <div style={{ float: 'right', height: '700px', marginTop:'5px' }} className='w-90 '>
            <div>{msg}</div>
            <table className='styled-table'>
         <thead>
            <tr>
                <th style={{textAlign: 'center'}}>No.</th>
                <th style={{textAlign: 'center'}}>Name</th>
                <th style={{textAlign: 'center'}}>Description</th>
                <th style={{textAlign: 'center'}}>Price</th>
                <th style={{textAlign: 'center'}}>Image</th>
                <th style={{textAlign: 'center'}}>Action</th>
            </tr>
         </thead>
        
         <tbody>
            {
                getmedi.map((item, index)=>{
                    return(
                        <tr key={item.id}>
                            <th scope= 'row'>{index+1}</th>
                            <th >{item.name}</th>
                            <th >{item.description}</th>
                            <th >{item.price}</th>
                            <th > <img src={item.image} className="db w-40  center br2 br--top" alt="Photo of a kitten looking menacing." /></th>
                            <th>
                            <Link to={`/edit/${item._id}`} className='btn btn-edit' >Edit</Link>
                                <button className='btn btn-delete' onClick={e=>delet(item._id)} >Delete</button>
                                
                            </th>
                        </tr>
                    )
                    
                })
            }
         </tbody>
         </table>

        </div>
    )
}

export default GetAllmedi