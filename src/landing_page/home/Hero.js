import React from 'react'

function Hero() {
  return ( 
    <div className='container-fluid py-5 px-0'>
      <div className='row justify-content-center text-center mx-0'>
        <div className='col-12 px-0'>
          <img src='media/homeHero.png' alt='homeHero' className='img-fluid mb-4 rounded shadow-sm w-100'/>
          <h1 className='mt-4 mb-3 fs-2 fs-md-1'>Invest in everything</h1>

          <p className='mb-4 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <div className="d-flex justify-content-center mb-4">
            <button className='btn btn-primary px-4 py-2 fs-5 w-75 w-sm-75 w-md-50'>Signup Now</button>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Hero;
