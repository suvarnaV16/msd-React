import React from "react";
import { Link } from "react-router-dom";
import "./assets/Styles.css";


const CustomerService = () => {
  return (
    <div>
      <header>
        <div className="logo">JobBuddy</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </header>

      <section className="about">
        <h2>Customer Service Jobs</h2>
        <p>
          Help customers solve problems and provide exceptional service
          experiences for top brands.
        </p>
        <br />
        <Link to="/home" className="btn">⬅ Back to Home</Link>
      </section>

      <footer>
        &copy; 2025 JobBuddy. All rights reserved.
      </footer>
    </div>
  );
};

export default CustomerService;
