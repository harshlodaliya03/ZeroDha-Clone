import React from 'react'

function Awards() {
  return ( 
   <div className='container py-5'>
    <div className='row align-items-center'>
      <div className='col-md-6 col-sm-12 p-3 text-center'>
        <img src='media/largestBroker.svg' alt='largestbroker' className='img-fluid rounded shadow-sm mb-4' style={{maxWidth: '100%', height: 'auto'}}/>
      </div>
        <div className='col-md-6 col-sm-12 p-3 mt-3 mt-md-0'>
        <h1 className='mb-4'>Largest Stock Broker In India</h1>
        <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail orders volumes in India daily by trading and investing in:</p>
        
          <div className='row'>
            <div className='col-6'>
              <ul className='list-unstyled'>
          <li>
            <p>Futures and options</p>
          </li>

           <li>
            <p>Commodity derivatives</p>
          </li>

           <li>
            <p>Currency derivatives</p>
          </li>

        </ul>
            </div>
            <div className='col-6'>
              <ul className='list-unstyled'>
          <li>
            <p>Stocks and IPOs</p>
          </li>

           <li>
            <p>Direct mutual funds</p>
          </li>

           <li>
            <p>Bonds and Govt. Securities</p>
          </li>

        </ul>
            </div>
            </div>
            <img src='media/pressLogos.png' alt='presslogos' className='img-fluid mt-4' style={{maxWidth:"90%", height:"auto"}}/>
          </div>
        
      </div>
    </div>
   );
}

export default Awards;
