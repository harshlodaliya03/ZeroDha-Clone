import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3002/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="orders">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "80%",
          height: "auto",
          margin: "auto",
          border: "2px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Quantity
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Price (₹)
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {order.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {order.qty}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {order.price}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {order.mode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
