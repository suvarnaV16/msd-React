import React, { useState } from "react";
import "./assets/Styles.css";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // later you can integrate job search logic here
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">JobBuddy</div>
        <nav>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="/login" className="btn">Login</a>
          <a href="/signup" className="btn">Sign Up</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Explore Top Jobs</h1>
        <p>Discover jobs that match your skills and passion</p>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search jobs by title or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Job Categories */}
      <section className="job-categories">
        <h2>Browse Job Categories</h2>
        <div className="category-grid">
          <a href="/software" className="category-card">Software Engineer</a>
          <a href="/data-analyst" className="category-card">Data Analyst</a>
          <a href="/uiux" className="category-card">UI/UX Designer</a>
          <a href="/digital-marketing" className="category-card">Digital Marketing</a>
          <a href="/finance" className="category-card">Finance & Accounting</a>
          <a href="/customer-service" className="category-card">Customer Service</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2025 JobBuddy. All rights reserved.
      </footer>
    </>
  );
}

export default Home;
