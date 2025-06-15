import React from "react";

function Charges() {
  return (
    <div className="container">
      <style>
        {`
          .table-header {
            background-color:rgb(178, 114, 114) !important;
          }
          .table-row-alt {
            background-color: #f9f9f9 !important;
          }
          .table-row-white {
            background-color: #ffffff !important;
          }
        `}
      </style>
      <div className="row ">
        <h4 className="text-center mt-5 text-muted">
          <a style={{ textDecoration: "none" }} href="">
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h4>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          <h3 className="mb-3x">Charges explained</h3>

          <p>Securities/Commodities transaction tax</p>

          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>

          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <p>Transaction/Turnover Charges</p>

          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>

          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>

          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>

          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>

          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <p>Call &amp; trade</p>

          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <p>Stamp charges</p>

          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <p>NRI brokerage charges</p>

          <p>₹100 per order for futures and options.</p>

          <p>
            For a non-PIS account, 0.5% or ₹100 per executed order for equity
            (whichever is lower).
          </p>

          <p>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </p>

          <p>₹500 + GST as yearly account maintenance charges (AMC) charges.</p>

          <p>Account with debit balance</p>

          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

          <p>Equity and Futures - ₹10 per crore + GST of the traded value.</p>

          <p>Options - ₹50 per crore + GST traded value (premium value).</p>

          <p>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </p>

          <p>Margin Trading Facility (MTF)</p>

          <p>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
          </p>

          <p>
            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
          </p>

          <p>
            MTF pledge charge: ₹15 + GST per pledge and unpledge request per
            ISIN.
          </p>
        </div>
        <div className="col-6 mt-5">
          <p>GST</p>

          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <p>SEBI Charges</p>

          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <p>DP (Depository participant) charges</p>

          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>

          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>

          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <p>Pledging charges</p>

          <p>₹30 + GST per pledge request per ISIN.</p>

          <p>AMC (Account maintenance charges)</p>

          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here
          </p>

          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, Click here
          </p>

          <p>Corporate action order charges</p>

          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <p>Off-market transfer charges</p>

          <p>₹25 per transaction.</p>

          <p>Physical CMR request</p>

          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <p>Payment gateway charges</p>

          <p>₹9 + GST (Not levied on transfers done via UPI)</p>

          <p>Delayed Payment Charges</p>

          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>

          <p>Trading using 3-in-1 account with block functionality</p>

          <p>Delivery & MTF Brokerage: 0.5% per executed order.</p>
          <p>Intraday Brokerage: 0.05% per executed order.</p>
        </div>
      </div>

      <div className="row">
        <p className="mt-3 fs-4">Disclaimer</p>
        <p style={{ fontSize: "15px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Charges;
