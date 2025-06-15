import React from 'react'

function Stats() {
  return (  
    <div className='container py-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 col-sm-12 mb-4 mb-md-0'>
          <h1 className='mb-4'>Trust with confidence</h1>

          <h2 className='mb-3 fs-5'>Customer-first-always</h2>
          <p className='mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

          <h2 className='mb-3 fs-5'>No spam or gimmicks</h2>
          <p className='mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

           <h2 className='mb-3 fs-5'>The Zerodha universe</h2>
          <p className='mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

           <h2 className='mb-3 fs-5'>Do better with money</h2>
          <p className='mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

        </div>
          <div className='col-md-6 col-sm-12 p-3 text-center'>
            <img src='media/ecosystem.png' alt='ecosystem' className='img-fluid mb-3' style={{maxWidth:"100%", height:"auto"}}/>
            <div className='text-center'>
              <a href='' className='mx-3 text-decoration-none text-primary fw-semibold'>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

              <a href='' className='mx-3 text-decoration-none text-primary fw-semibold'>Try Kit demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Stats;
