import React from 'react'
import './checkout.css';
import './header.css';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import Subtotal from './Subtotal';
import ProductList from './ProductList';
function Checkout() {
  const [{cart,id},dispatch]=useStateValue();
  const [products, setProducts] = useState();

  const navigate=useNavigate();
  console.log('Checkout rendered. Cart length:', cart?.length);

const removefromcart=()=>
{


  dispatch({
    type:'REMOVE_FROM_CART',
    item:{
    id:id,
    }   
  });
};
  

  return (

    <div className="checkout_body" >
      
        <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" className="checkout_img"/>
   <div className="checkout_comp">

    {cart?.length===0 ?
    (
      <h1 >Your Shopping Cart is Empty</h1>
      

    ):
    (
      <h1 >Your Shopping Cart</h1>
      )
    }
    
<div className="added_products">

   <div>
    
   
   {
  cart.map(item=>(
    
  <div key={item.id}>
  
    <div className="pro_image">
      <img src={item.image} className="checkout_pro_image"/>
</div>  
  </div>
))
}
  
   </div>
<div className="checkout_pro">
  {
  cart.map(item=>(
  <div key={item.id}>
    <div className="checkout_title">
    <p>{item.title}</p>
</div>
<div className="checkout_price">
    <p>{item.price}</p>         
 </div>
    <div className="checkout_rating">         
    {

    Array(item.rating).fill().map((_,i)=>(   
        <p3>⭐</p3>
        
        ))
    }

    </div> 
    <button className="remove_button"  onClick={()=> removefromcart(item.id)} >Remove from Cart</button>

<hr></hr>

  </div>
  
))
}

</div>

   </div>
  
</div>

   <div className="checkout_left"> 
   

<div><Subtotal/></div>
<br></br>  
<br></br>

<button className="proceed_button" onClick={e=> navigate('/payment')}>Proceed to Checkout</button>  

   </div>

    </div>
  )
}

export default Checkout