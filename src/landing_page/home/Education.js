import React from 'react'

function Education() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mb-3 d-flex justify-content-center align-items-center px-4'>
          <img src='media/education.svg' alt='Varsity Logo' className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
        <div className='col-md-6 col-12 mt-4 d-flex flex-column justify-content-center px-4'>
          <div className='mb-4'>
            <h1 className='fs-2'>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href='' className='text-decoration-none text-primary fw-semibold'>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>

          <div>
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href='' className='text-decoration-none text-primary fw-semibold'>TradingQ&A  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
