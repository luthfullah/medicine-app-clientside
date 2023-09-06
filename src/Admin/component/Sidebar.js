// Sidebar.js
import React, { useState } from 'react';
import 'tachyons';
import './Sidebar.css'; // Create this file for custom styling
import { Link } from 'react-router-dom';
import PostMedi from './PostMedi'
import Newlist from './Newlist';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
const style={
  color: 'white',
   fontWeight: 'bold',
    textDecoration:'none'
}
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button " onClick={toggleSidebar} >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <div className="sidebar-content">
        {/* Add your sidebar content here */}
        <h2 className='yellow'>Sidebar Content</h2>
        <ul>
          <li className='f6 dim br-pill ph3 pv2 mb2 white bg-blue'> <Link style={style} to='/getallmedi'>All Medicines</Link></li>
          <li> <PostMedi /></li>
          <li className='f6 dim br-pill ph3 pv2 mb2 white bg-blue'> <Link style={style} to='/newlist' className=''>clients order list</Link></li>
       
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;
