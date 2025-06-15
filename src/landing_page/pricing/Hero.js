import React from 'react'

function Hero() {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
        <p className='text-center mt-5 ' style={{fontSize:"70px" , color:"#424242"}} >Charges <br/> <p className='text-center text-muted fs-4'>List of all Charges and taxes</p></p>
       
      </div>

      <div className='row mt-5'>
        <div className='col-4 mt-5'>
          <img src='https://zerodha.com/static/images/pricing-eq.svg'/>
           <p className='text-center fs-2'>Free equity delivery</p>
          <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

        </div>
         <div className='col-4 mt-5'>
           <img src='https://zerodha.com/static/images/other-trades.svg'/>
           <p className='text-center fs-2'>Intraday and F&O trades</p>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
         </div>
          <div className='col-4 mt-5'>
             <img src='https://zerodha.com/static/images/pricing-eq.svg'/>
          <p className='text-center fs-2'>Free direct MF</p>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
      </div>
    </div>
   );
}

export default Hero;