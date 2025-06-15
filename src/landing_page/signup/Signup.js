import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setMessage("");
    setError("");
    setFormData({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const url = isRegister
      ? "http://localhost:3002/register"
      : "http://localhost:3002/login";
    const payload = isRegister
      ? {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setError("");
        if (!isRegister) {
          // Removed redirect to dashboard
          // navigate("./src/components/Dashboard.js");
        }
      } else {
        setError(data.message || "An error occurred");
        setMessage("");
      }
    } catch (err) {
      setError("Network error");
      setMessage("");
    }
  };

  return (
    <div
      className="signup-container"
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <button
        onClick={handleToggle}
        style={{
          marginBottom: "20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Switch to {isRegister ? "Login" : "Register"}
      </button>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
      )}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default Signup;
