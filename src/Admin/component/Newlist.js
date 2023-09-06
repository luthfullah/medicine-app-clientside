import React,{useState, useEffect} from 'react'

const Newlist = () => {
    const [data, setData] = useState([]);
    
  
    useEffect(() => {
      // Define the API endpoint URL
      const apiUrl = 'http://localhost:8000/ordermedicine';
  
      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => {
          if (!response) {
            console.log('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
            // console.log(data.userorder);
          setData(data.userorder); // Update the state with the fetched data
        
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);
  
    
  
    return (
      <div>
        <h1>Fetched Data</h1>
        
        <table className='styled-table'>
         <thead>
            <tr>
                <th style={{textAlign: 'center'}}>No.</th>
                <th style={{textAlign: 'center'}}>Name</th>
                <th style={{textAlign: 'center'}}>Address</th>
                <th style={{textAlign: 'center'}}>Email</th>
                <th style={{textAlign: 'center'}}>Phone</th>
                
            </tr>
         </thead>
        
         <tbody>
        {data.map((item, index) => (
          
          <tr key={item.id}>
          <th scope= 'row'>{index+1}</th>
          <th scope= 'row'>{item.username}</th>
          <th >{item.address}</th>
          <th >{item.email}</th>
          <th >{item.phone}</th>
         
      </tr>
            ))}
          </tbody>
        </table>
       
       
      </div>
    );
  }

export default Newlist