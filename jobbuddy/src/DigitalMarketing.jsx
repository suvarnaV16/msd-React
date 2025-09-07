import React from "react";
import { Link } from "react-router-dom";
import "./assets/Styles.css";


function DigitalMarketing() {
  return (
    <div>
      <header>
        <div className="logo">JobBuddy</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
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
        <h2>Digital Marketing Jobs</h2>
        <p>
          Join the fast-growing field of digital marketing and help brands grow
          through SEO, SEM, content, and social media strategies.
        </p>
        <br />
        <Link to="/home" className="btn">⬅ Back to Home</Link>
      </section>

      <footer>
        &copy; 2025 JobBuddy. All rights reserved.
      </footer>
    </div>
  );
}

export default DigitalMarketing;
