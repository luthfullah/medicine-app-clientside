
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  
   //logout 
   const logout=(e)=>{
 
    alert('you are out bro..')
    window.localStorage.clear();
    navigate('/')

  }
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-grow-1 bg-yellow pv3">
          <nav>
            
              <a style={{float: 'right', marginTop: '1px'}} 
              className="f6 dib white bg-black hover-bg-yellow hover-black no-underline pv2 ph4 br-pill
               ba b--black-20 " onClick={logout}>Logout</a>
            
          </nav>
        </div>
      
    </div>
  );
};

export default Admin;
