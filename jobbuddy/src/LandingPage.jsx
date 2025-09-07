import React from "react";
import "./assets/styles.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">JobBuddy</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/home">Jobs</Link></li>
            <li><a href="#">Upload Resume</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Signup</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Perfect Job with JobBuddy</h1>
        <p>Smart job recommendations based on your resume and location.</p>
        <Link to="/home" className="btn">Get Started</Link>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>What We Do</h2>
        <p>
          JobBuddy helps job seekers find relevant opportunities by analyzing their resume
          content and matching it with real-time job listings across different locations.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 JobBuddy. All rights reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage;
