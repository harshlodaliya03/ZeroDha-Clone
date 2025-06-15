import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Coin from './Coin';
import API from './Api';
import Varsity from './Varsity';

function ProductPage() {
  return ( 
    <>
        <Hero />
        <LeftSection  imageURL ="media/kite.png"
  productName ="Kite"
  productDescription ="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo =""
  learnMore =""
  googlePlay =""
  appStore =""/>
        <RightSection   imageURL ="https://zerodha.com/static/images/products-console.png"
  productName ="Console"
  productDescription ="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.

"
  
  learnMore =""
  /> 
  <Coin imageURL ="https://zerodha.com/static/images/products-coin.png"
  productName ="Coin"
  productDescription ="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
  
  learnMore =""
  googlePlay =""
  appStore ="" />

  <API />
  <Varsity />
        <Universe />
    </>
   );
}

export default ProductPage;
