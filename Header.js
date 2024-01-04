

import React from 'react'
import { useState } from 'react';
import './index.css';
import './header.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function Header() {
  
    const [{cart,user},dispatch]=useStateValue();
      const handleAuthentication =()=>
      {
        if (user){
            auth.signOut();
        }
      }
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
  return (
    
<div className="nav">
       <Link to="/">
       < img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png" alt="img" className="img" height="25px" width="100px"/> 
      </Link>
        <div className="address">
            <span className="name">&emsp;&emsp;Hello</span>
     <br></br>
     <LocationOnOutlinedIcon  className="location"></LocationOnOutlinedIcon>
     <b><span className="addr">&nbsp;Select your Address</span></b>
    </div>
   <div className="search_bar">
        <div className="search">

        <div className="products">
        </div>
    </div>
    </div>
 
    <div className="accounts">
  <Link to={ !user && '/login' }>
    <div onClick={handleAuthentication}>
    <span className="name">Hello, {!user ? 'Guest' : user.email.split('@')[0]}</span>
<br></br>
<b><span className="addr">{!user? 'Sign In' :'Sign Out'}</span></b> 
</div>
</Link>

   </div>
    <Link to="/orders">
    <div className="return">
<span className="name">Returns </span>
<br></br>
<b><span className="addr"> & Orders</span></b>
    
</div>
    </Link>
  
<Link to="/checkout" >
<div className="cart">
  <div className="cart_icon">
    
< ShoppingCartOutlinedIcon style={{fontSize: '40px'}}></ShoppingCartOutlinedIcon >

</div>
    <span className="cart_text"    >{cart.length}</span>
</div>
</Link>


</div>

  )
  
}
export default Header;