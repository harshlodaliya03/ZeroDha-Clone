import React from 'react'

function Pricing() {
  return ( 
    <div className='container py-5'>
      <div className='row align-items-center text-center text-md-start'>
        <div className='col-md-6 col-sm-12 mb-4 mb-md-0'>
          <h1 className='mb-3'>Unbeatable pricing</h1>
          <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

          <a href='' className='text-decoration-none text-primary fw-semibold'>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-md-2 col-sm-4 d-flex flex-column align-items-center mb-3 mb-md-0'>
          <img src='media/pricingEquity.svg' alt='pricingequity' className='img-fluid mb-2' style={{maxWidth: '80%', height: 'auto'}}/>
          <p className='mb-0 fs-6 '>Free account opening</p>
        </div>

         <div className='col-md-2 col-sm-4 d-flex flex-column align-items-center mb-3 mb-md-0'>
          <img src='media/pricing0.svg' alt='pricing0' className='img-fluid mb-2' style={{maxWidth: '80%', height: 'auto'}}/>
          <p className='mb-0 fs-6'>direct mutual funds</p>
        </div>

         <div className='col-md-2 col-sm-4 d-flex flex-column align-items-center mb-3 mb-md-0'>
          <img src='media/intradaytrades.svg' alt='intradaytrades' className='img-fluid mb-2' style={{maxWidth: '80%', height: 'auto'}}/>
          <p className='mb-0 fs-6'>Intraday and F&O</p>
        </div>
      </div>
    </div>
   );
}

export default Pricing;
