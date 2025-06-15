const styles = {
  container: {
    margin: "20px",
    padding: "20px",
  },
  tableHeader: {
    backgroundColor: "#d3d3d3",
  },
  tableRowAlt: {
    backgroundColor: "#f9f9f9",
  },
  tableRowWhite: {
    backgroundColor: "#ffffff",
  },
};

function Table() {
  return ( 
    <div style={styles.container}>
      <div className="row mt-4">
        <h3>Charges for account opening</h3>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr style={styles.tableHeader}>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.tableRowWhite}>
                <td>Online account</td>
                <td>Free</td>
              </tr>
              <tr style={styles.tableRowAlt}>
                <td>Offline account</td>
                <td>₹500</td>
              </tr>
              <tr style={styles.tableRowWhite}>
                <td>Corporate account</td>
                <td>₹1000</td>
              </tr>
              <tr style={styles.tableRowAlt}>
                <td>NRIs account</td>
                <td>₹1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-5">
        <h3>Charges for optional value added services</h3>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr style={styles.tableHeader}>
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.tableRowWhite}>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr style={styles.tableRowAlt}>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
              </tr>
              <tr style={styles.tableRowWhite}>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
}

export default Table;
