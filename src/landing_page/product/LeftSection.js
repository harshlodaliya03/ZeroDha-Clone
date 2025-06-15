import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center border-top mt-5 gx-5">
        <div className="col-md-6 p-3 mt-5">
          <img src={imageURL} alt={productName} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
        <div className="col-md-6 mt-5 text-muted">
          <h1 style={{color:"black"}}><b>{productName}</b></h1>
          <p className="fs-5">{productDescription}</p> 
          <div className="d-flex flex-wrap gap-2">
            <a href={tryDemo} className="btn btn-primary">Try Demo</a>
            <a href={learnMore} className="btn btn-outline-primary">Learn More</a>
            <a href={googlePlay} className="btn btn-outline-secondary">Google Play <i className="fa fa-android" aria-hidden="true"></i></a>
            <a href={appStore} className="btn btn-outline-secondary">App Store <i className="fa fa-apple" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
