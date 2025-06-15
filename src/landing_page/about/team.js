import React from "react";

function Team() {
  return (
    <div className="container">
      <h1 className="text-center my-5">People</h1>
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img  
            src="media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4>Nithin Kamath</h4>
          <p>Founder & CEO</p>
        </div>
        <div className="col-md-6">
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <br /><br />
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            <br /><br />
            Playing basketball is his zen.
            <br /><br />
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center mx-3">
          <img  
            src="media/nithinKamath.jpg"
            alt="Person 2"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4>Person 2</h4>
          <p>Chief Technology Officer</p>
        </div>
        <div className="col-md-3 text-center mx-3">
          <img  
            src="media/nithinKamath.jpg"
            alt="Person 3"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4>Person 3</h4>
          <p>Chief Marketing Officer</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
