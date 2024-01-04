import Header from './Header';
import  './index.css';
import Home from './Home';
import Checkout from './Checkout';
import React, { useEffect } from 'react';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';
import Order from './Order';
import Register from './Register';
//eslint-disable-next-line no-unused-expressions

<script src="http://localhost:3000">
  
<script src="https://unpkg.com/react-flip-move/dist/react-flip-move.js"></script>
</script>
const promise=loadStripe("pk_test_51N0orcSHiuv6wJJaaWOg8XONlNcCSOU4iYdbPOKt542IFET0J1vEKTMXzaJvjzbfpwnffA9lmyj3p2XWyjb4uzJB00rJTE5ttd");
function App() {
  const [{},dispatch]=useStateValue();
useEffect(()=>{
  auth.onAuthStateChanged(authUser=>
    {
      if(authUser)
      {
     dispatch(
       {
          type:"SET_USER",
          user:authUser
      }
     )
      }
      else{
dispatch(
  {
    type:"SET_USER",
    user:null
  }
)
      }
    })
  
},[])

  return (
    <Router>
      <div className="App">
     <Routes>
 
     <Route path="/orders" element={[<Header />,<Orders/>,<Order/>]}/>
     <Route path="/checkout" element={[<Header />,<Checkout/>]}/>
     <Route path="/" element={[<Header />, <Home />]}/>
     <Route path="/login" element={[<Login/>]}/>
     <Route path="/Register" element={[<Register/>]}/>

     <Route  path="/payment" element={
         [<Header />,
        <Elements stripe={promise} >
          <Payment/>
          
        </Elements>]}/>
</Routes>
    </div>
    </Router>
  );
}
export default App;
