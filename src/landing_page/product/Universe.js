import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <p className="text-center fs-4 text-muted mt-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech blog.
          </a>
        </p>

        <h2 className="text-center text-muted mt-5">The Zerodha Universe</h2>

        <p className="text-center mt-4" style={{ color: "black" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row text-center">
          <div className="col-md-4">
            <img
              src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
              alt="zerodha fund house"
              className="mt-4 mx-auto d-block"
              style={{ width: "160px", height: "50px" }}
            />
            <p className="text-muted fs-7 mt-2">
              Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://zerodha.com/static/images/products/sensibull-logo.svg"
              alt="zerodha fund house"
              className="mt-4 mx-auto d-block"
              style={{ width: "160px", height: "50px" }}
            />
            <p className="text-muted fs-7 mt-2">
              Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more. </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://zerodha.com/static/images/partners/tijori.svg"
              alt="zerodha fund house"
              className="mt-4 mx-auto d-block"
              style={{ width: "160px", height: "50px" }}
            />
            <p className="text-muted fs-7 mt-2">
              Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

            </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://zerodha.com/static/images/products/streak-logo.png"
              alt="zerodha fund house"
              className="mt-4 mx-auto d-block"
              style={{ width: "160px", height: "50px" }}
            />
            <p className="text-muted fs-7 mt-2">
             Systematic trading platform
that allows you to create and backtest
strategies without coding.

            </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://zerodha.com/static/images/products/smallcase-logo.png"
              alt="zerodha fund house"
              className="mt-4 mx-auto d-block"
              style={{ width: "160px", height: "50px" }}
            />
            <p className="text-muted fs-7 mt-2">
             Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.

            </p>
          </div>

          <div className="col-md-4">
            <img
              src="https://zerodha.com/static/images/products/ditto-logo.png"
              alt="zerodha fund house"
              className="mt-4 mx-auto d-block"
              style={{ width: "160px", height: "50px" }}
            />
            <p className="text-muted fs-7 mt-2">
             Personalized advice on life
and health insurance. No spam
and no mis-selling.


            </p>
          </div>

         <div className="d-flex justify-content-center mb-4 mt-4">
            <button className='btn btn-primary px-4 py-2 fs-5 w-50 w-sm-75 w-md-50'>Signup Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
