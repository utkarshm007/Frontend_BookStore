import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./AdminLogin.css"; // Import CSS for admin login

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/admin-login", {
        email,
        password,
      });
      console.log(response.data); // Assuming the response contains relevant data
      // Set loggedIn state to true upon successful login
      setLoggedIn(true);
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid email or password. Please try again."); // Set error message
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-admin-login-container">
      <div className="admin-login-admin-login-form">
        <h1 className="admin-login-form-heading">Admin Login</h1>
        {error && <p className="admin-login-error-text">{error}</p>} {/* Display error message */}
        <form onSubmit={handleLogin}>
          <div className="admin-login-form-group">
            <input
              type="email"
              className="admin-login-form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="admin-login-form-group">
            <input
              type="password"
              className="admin-login-form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="admin-login-btn admin-login-btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="admin-login-error-text mt-3">
          <Link to="/adminSignup" className="admin-login-register-link">
            New admin? Click here to sign up
          </Link>
        </p>
      </div>
      {loggedIn && <Navigate to="/adminDashboard" />}
    </div>
  );
};

export default AdminLogin;
