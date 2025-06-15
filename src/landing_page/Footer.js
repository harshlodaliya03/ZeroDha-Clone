import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <Link
              to="/"
              className="d-flex align-items-center mb-3 text-dark text-decoration-none"
            >
              <img
                src="media/logo.svg"
                alt="Zerodha Logo"
                style={{ width: "120px" }}
              />
            </Link>
          </div>
          <div className="col-md-6 text-md-end">
            {/* Social Media Icons */}
            <a href="javascript:void(0);" className="text-dark me-3" aria-label="Instagram">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
            <a href="javascript:void(0);" className="text-dark me-3" aria-label="Facebook">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="javascript:void(0);" className="text-dark me-3" aria-label="X (Twitter)">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="javascript:void(0);" className="text-dark me-3" aria-label="Telegram">
              <i className="fa fa-telegram fa-lg"></i>
            </a>
          </div>
        </div>

        <div className="row">
          {/* Account Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Account</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/open-demat-account"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Open demat account
                </Link>
              </li>
              <li>
                <Link
                  to="/minor-demat-account"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Minor demat account
                </Link>
              </li>
              <li>
                <Link
                  to="/nri-demat-account"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  NRI demat account
                </Link>
              </li>
            </ul>
          </div>

          {/* Commodity Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Commodity</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/dematerialisation"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Dematerialisation
                </Link>
              </li>
              <li>
                <Link
                  to="/fund-transfer"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Fund transfer
                </Link>
              </li>
              <li>
                <Link
                  to="/mtf"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  MTF
                </Link>
              </li>
              <li>
                <Link
                  to="/referral-program"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Referral program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/contact-us"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/support-portal"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Support portal
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-file-complaint"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  How to file a complaint?
                </Link>
              </li>
              <li>
                <Link
                  to="/complaint-status"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Status of your complaints
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Sections */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>More</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/bulletin"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Bulletin
                </Link>
              </li>
              <li>
                <Link
                  to="/circular"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Circular
                </Link>
              </li>
              <li>
                <Link
                  to="/z-connect-blog"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Z-Connect blog
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          {/* Company Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/about"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/philosophy"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  to="/press-media"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Press & media
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/zerodha-cares"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Zerodha Cares (CSR)
                </Link>
              </li>
              <li>
                <Link
                  to="/zerodha-tech"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Zerodha.tech
                </Link>
              </li>
              <li>
                <Link
                  to="/open-source"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Open source
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/upcoming-ipos"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Upcoming IPOs
                </Link>
              </li>
              <li>
                <Link
                  to="/brokerage-charges"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Brokerage charges
                </Link>
              </li>
              <li>
                <Link
                  to="/market-holidays"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Market holidays
                </Link>
              </li>
              <li>
                <Link
                  to="/economic-calendar"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Economic calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/calculators"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Markets Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Markets</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
              <li>
                <Link
                  to="/markets"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors"
                  className="text-dark"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  Sectors
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-5 mb-4 sm-3">
            <img src="https://images.bhaskarassets.com/web2images/1884/2025/01/26/gif-21_1737873260.gif" alt="e"  style={{width:"100%", height:"auto", maxWidth:"120px"}}/>
          </div>

          {/* Empty column for alignment */}
          <div className="col-md-3 col-sm-6 mb-4"></div>
          
        </div>

        <div
          className="mt-4"
          style={{ fontSize: "12px", color: "#666", lineHeight: "1.4" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <a
              href="mailto:complaints@zerodha.com"
              style={{ color: "#666", textDecoration: "underline" }}
            >
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a
              href="mailto:dp@zerodha.com"
              style={{ color: "#666", textDecoration: "underline" }}
            >
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a
              href="https://scores.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#666", textDecoration: "underline" }}
            >
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <Link to="/create-ticket" style={{ color: "#666", textDecoration: "underline" }}>
              create a ticket here
            </Link>
            .
          </p>
          <p>
            NSE BSE MCX Terms & conditions Policies & procedures Privacy policy
            Disclosure For investor's attention Investor charter
          </p>
        </div>

        <div className="text-center mt-3">
          <small>
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
