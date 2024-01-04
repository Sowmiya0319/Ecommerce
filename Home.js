
import React from 'react'
import './index.css'
import './header.css'
import Product from './Product'
export default function Home() {
  return (
    <div >
  
  
            <  img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD-Apr/Deals-3000-Unrec-PC._CB591758540_.jpg" className="home_img" />


            <div className="pro">
<Product

title="Tablet 2023 Newest, 5G WiFi Tablet, Octa-Core Tablet, Android 11 Tablet 128GB ROM + 4GB RAM, 10.1 inch HD "
image="https://m.media-amazon.com/images/I/61qtLllsNzL._AC_SY450_.jpg"
rating={4}
price="45,000₹"
/>

<Product

title="Xiaomi NotebookPro QHD+ IPS AntiGlare Display Intel Core i5-11300H )"
image="https://m.media-amazon.com/images/I/71iiXU7HHkL._SX466_.jpg"
rating={3}
price="43,000₹"/>

<Product

  title="Redmi A1 (Light Green, 2GB RAM 32GB ROM) | Segment Best AI Dual Cam | 5000mAh Battery  "
  image="https://m.media-amazon.com/images/I/81UmTnrBDSL._SX679_.jpg"
rating={3}
price="23,000₹"/>
</div>

<div className="pro">
  <Product
 
  title="CASCHO Wireless Earbuds, Bluetooth 5.3 Headphones, 60Hrs Playback HD Stereo Audio LED Display "
  image="https://m.media-amazon.com/images/I/61FF2+QNFjL._AC_SY450_.jpg"
  rating={4}
  price="1,400₹"
  />
  <Product

  title="Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones,8 Mics for Clear Calling"
  image="https://m.media-amazon.com/images/I/51KGPDttQhL._SX679_.jpg"
  rating={4}
  price="16,000₹"/>
 

</div>
<div className="pro">
  <Product

  title="Fitness Tracker with Heart Rate Monitor, Fitpolo Smart Watch 1.3 inches Color Touch Screen IP68 Waterproof "
  image="https://m.media-amazon.com/images/I/61h8lcXTyeL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  rating={3}
  price="3,250₹"/>
  <Product

  title="Razer Huntsman Mini 60% Gaming Keyboard: Fast Keyboard Switches - RGB Lighting"
  image="https://m.media-amazon.com/images/I/618etkLUt9L._AC_SY450_.jpg"
  rating={4}
  price="1,250₹"/>
  <Product
title="Logitech MX Master 3 Advanced Wireless Mouse - Ultra-fast, Comfortable, Precision, Ergonomic, 4000 DPI, Customizable Buttons"
image="https://m.media-amazon.com/images/I/41a-hd-W1LL._SX300_SY300_QL70_FMwebp_.jpg"
rating={4.7}
price="7,999₹"
/>
</div>
<div className="pro">
<Product

  title="Xbox Elite Wireless Controller Series 2 Core – White"
  image="https://m.media-amazon.com/images/I/61H321AbQuL._SX466_.jpg"
  rating={4}
  price="4,250₹"/>
  <Product
 
  title="GoPro HERO11 Black - Waterproof Action Camera with 5.3K60 Ultra HD Video, 27MP Photos"
  image="https://m.media-amazon.com/images/I/617sGSjmC1L._AC_SX679_.jpg"
  rating={4}
  price="29,000₹"
  />
  

  <Product
 
 title="SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB Storage, 200MP Camera, Night Mode"
 image="https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_SY450_.jpg"
 rating={4}
 price="29,000₹"
 />
 
</div>
<div className="footer">

</div>
    </div>
  )
}