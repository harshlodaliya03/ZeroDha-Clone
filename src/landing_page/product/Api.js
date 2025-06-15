import React from 'react';

function API() {
  const imageURL = "https://zerodha.com/static/images/kite-trade/landing.svg";
  const productName = "Kite Connect API";
  const productDescription = "A set of REST-like APIs that allow you to build your own trading platforms and tools with access to market data and order management.";
  const learnMore = "https://kite.trade/docs/connect/v3/";
  
  return (
    <div className="container">
      <div className="row align-items-center border-top mt-5 gx-5">
        <div className="col-md-6 mt-5 text-muted order-md-1 order-2">
          <h1 style={{color:"black"}}><b>{productName}</b></h1>
          <p className="fs-5">{productDescription}</p> 
          <div className="d-flex flex-wrap gap-2">
            <a href={learnMore} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Learn More <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-md-6 p-3 mt-5 order-md-2 order-1">
          <img src={imageURL} alt={productName} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
}

export default API;
