import React from "react";

const ticketCategories = [
  {
    title: "Account Opening",
    iconClass: "fa fa-user-plus",
    topics: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    iconClass: "fa fa-user",
    topics: [
      "Your Profile",
      "Account modification",
      "Client Master Report ",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    iconClass: "fa fa-signal",
    topics: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    title: "Funds",
    iconClass: "fa fa-credit-card",
    topics: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    iconClass: "fa fa-circle-o-notch",
    topics: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    title: "Coin",
    iconClass: "fa fa-inr",
    topics: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h4 className="mt-4 text-muted">
          To create a ticket, select a relevant topic
        </h4>
        {ticketCategories.map((category, idx) => (
          <div key={idx} className="col-md-4">
            <h5 className="mt-5 fs-4">
              <i className={category.iconClass} aria-hidden="true"></i>{" "}
              {category.title}
            </h5>
            <ul
              style={{
                textDecoration: "none",
                listStyle: "none",
                marginLeft: "5px",
              }}
              className="list-group"
            >
              {category.topics.map((topic, tidx) => (
                <li key={tidx} style={{ marginBottom: "16px" }}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      margin: 0,
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "none",
                      font: "inherit",
                    }}
                    type="button"
                    aria-label={topic}
                  >
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
