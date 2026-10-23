import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login API logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-logo">
          BILLY <span>SNEAKERS</span>
        </h1>

        <h2>Welcome Back! 👋</h2>

        <p className="login-subtitle">
          Login to find your favorite sneakers!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register">Sign up</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;