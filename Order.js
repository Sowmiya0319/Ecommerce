import React from 'react';
import './order.css';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
function Order({ order }) {
  const [{cart}]=useStateValue();
  if (!order) {
    return null; 
  }
  const dateString = moment.unix(order?.data?.created).format("YYYY-MM-DD HH:mm:ss");
  return (
    <div className="orders_container">
     <br></br> 
    <div className="orders_delivered">
    <b><p>Delivered on</p> </b>     
     <small> <p>{dateString}</p></small>
    </div>


<div  className='order_id'>

      <p>
        <small>{order.id}</small>
      </p>
</div>


      <div style={{ top: "100px" }}>
        {order.data.cart?.map(item => (
         
          <div key={item.id}>
            <div>
              <img src={item.image} className="order_image" />
            </div>
            
            <div>
              <p className="order_title">{item.title}</p>
              <br />
            </div>
            <div  className="order_rating">
              {Array(item.rating).fill().map((_, i) => (
                <p3 className="order_rating" key={i}>⭐</p3>
              ))
              }
              </div>
            <div className="pricing">
            
              <p >{item.price}</p>
            </div>
            
           
            
           
            
          </div>
        ))}
      </div>
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
<div className="order_price">
   <p>{item.price}</p>         
</div>
   <div className="order_rating">         
   {

   Array(item.rating).fill().map((_,i)=>(   
       <p3 className="order_rating">⭐</p3>
       
       ))
   }
   </div> 


 </div>
 
))
}

</div>

  </div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='order_total'>
              Order total <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        
      />
      <hr></hr>
    </div>
  )
}
export default Order;
