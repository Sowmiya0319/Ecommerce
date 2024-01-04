import React, { useState, useEffect} from 'react'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import './checkout.css';
import './payment.css';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './Reducer';
import axios from './axios';
import {  useNavigate} from 'react-router-dom';
import { db } from './firebase';
import {CardElement,useStripe, useElements } from '@stripe/react-stripe-js';
function Payment() {
const [{cart,user,id},dispatch]=useStateValue();
const stripe=useStripe();
const elements=useElements();
const [error,setError]=useState(null);
const [disabled,setDisabled]=useState(true);
const [succeeded,setSucceeded]=useState(false);
const [processing,setProcessing]=useState("");
const [clientSecret,setClientSecret]=useState(true);
const navigate=useNavigate();

const itemCountText = cart.length === 1 ? 'item' : 'items';
useEffect(()=>{

  const getClientSecret=async()=>
  {
    
    const response= await axios(
      {
        method:'post',
        url:`/payments/create?total=${getCartTotal(cart)*100}`
      }
    );
    setClientSecret(response.data.clientSecret)
  }
  getClientSecret();
},[cart])
const handlesubmit =async (event)=>
{
event.preventDefault();
setProcessing(true);
const payload=await stripe.confirmCardPayment(clientSecret,
  {
    payment_method:
    {
      card:elements.getElement(CardElement)
    }
  }).then(({paymentIntent})=>{
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .doc(paymentIntent.id)
    .set(
      JSON.parse(JSON.stringify({
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      }))
    );
  
        setSucceeded(true);
        setError(null);
       setProcessing(false);
       dispatch(
        {
          type:'EMPTY_CART'
        }
       )
        navigate('/orders');
        
  })
}
const handlechange = event=>
{
   setDisabled(event.empty);
   setError(event.error? event.error.message:" ");
}
if (!user) {
  navigate('/login');
  return null; 
}
    const removefromcart=()=>
    {
    
    
      dispatch({
        type:'REMOVE_FROM_CART',
        item: {
          id: id ? id : null
       
        }
      },);
    };
    return (
    <div>
    <div className='payment_container'>
      <div className="checkout_items">
      <h1>
            Checkout 
              <Link style={{textDecoration:'none'}} to ="/checkout">&nbsp;&nbsp;{cart.length} {itemCountText}
            </Link>
        </h1>
      </div>
        
{/* <div className="delivery_address">
<strong><h2>Delivery Address</h2></strong>
<div className="payment_address">
<p2>{user?.email}</p2>
<br></br>
<p2>No 1/31,ABC Street</p2>
<br></br>
<p2>Chennai,TamilNadu</p2>
<br></br>
<p2>India</p2>
<p></p>

</div>
<hr></hr>
</div> */}
<div className='products_section'>
    <div>
<h2>Review items and Delivery</h2>
</div>
<div className="products_item">

    <>
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
   <div className="checkout_pro" style={{top:"150px"}}>
  {
  cart.map(item=>(
  <div key={item.id}>
    <div className="checkout_title">
    <p>{item.title}</p>
</div>
<div className="checkout_price">
    <p className='payment_price'>{item.price}</p>         
 </div>
    <div className="checkout_rating">         
    {

    Array(item.rating).fill().map((_,i)=>(   
        <p3>⭐</p3>
        
        ))
    }
    </div> 
    <button className="remove_button"  onClick={removefromcart} >Remove from Cart</button>

<hr></hr>

  </div>
  
))
}

</div>
  </>


  
</div>
</div>
<hr></hr>

<div className="payment_method">
<h2>Payment Method</h2>
<form  onSubmit={handlesubmit}className='card_details'> 
  <CardElement onChange={handlechange}/>
  <div className='payment_price'>
  <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            Order ({cart.length} {itemCountText}): <strong>{value}</strong>
            </p>
    
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <div>
      <button className="payment_button" disabled={processing||disabled||succeeded}>
      <span>{processing ? <p>Processing</p>:"Buy Now"}</span>

      </button>
      </div>
      

  </div>
</form>
</div>
    </div>
    

    </div>
  )
}
export default Payment