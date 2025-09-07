import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./LandingPage"; // first page
import Home from "./Home";               // second page
import Login from "./Login";
import Signup from "./Signup";
import Finance from "./Finance";
import CustomerService from "./CustomerService";
import Software from "./Software";
import DataAnalyst from "./DataAnalyst";
import UiUx from "./UiUx";
import DigitalMarketing from "./DigitalMarketing";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Home Page (Jobs) */}
        <Route path="/home" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Job Categories */}
        <Route path="/finance" element={<Finance />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/software" element={<Software />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/uiux" element={<UiUx />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
      </Routes>
    </Router>
  );
}

export default App;
