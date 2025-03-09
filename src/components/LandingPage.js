import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserShield,
  FaGavel,
  FaRobot,
  FaSun,
  FaMoon,
  FaUniversity,
  FaChartLine,
  FaBalanceScale,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import { Button, Card, CardContent, Input } from "@mui/material";
import "./styles.css";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.style.background = darkMode
      ? "linear-gradient(to right, #141e30, #243b55)"
      : "#ffffff";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`main-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">Samvidhan-Setu</h1>
        <div className="nav-links">
          <Button className="nav-btn">
            <Link to="/">Home</Link>
          </Button>
          <Button className="nav-btn">
            <Link to="/chatbot">AI Chatbot</Link>
          </Button>
          <Button className="nav-btn">
            <Link to="/search">Case Search</Link>
          </Button>
          <Button className="nav-btn">
            <Link to="/signup">Login</Link>
          </Button>
          <Button
            className="nav-btn"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Legal Research & Assistance
        </motion.h1>
        <p className="hero-text">
          Search legal cases, interact with an AI chatbot, and predict case
          outcomes with our AI-driven platform.
        </p>
        <div className="search-box">
          <Input
            className="search-input"
            placeholder="Search for legal cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{
              backgroundColor: darkMode ? "#4a647f" : "#ffffff", // Better visibility
              color: darkMode ? "#ffffff" : "#000000",
              border: darkMode ? "1px solid #5c7a94" : "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          />
          <Button
            className="search-btn"
            onClick={handleSearch}
            style={{
              backgroundColor: darkMode ? "#5c7a94" : "#007bff",
              color: "white",
              marginLeft: "10px",
            }}
          >
            <FaSearch className="search-icon" />
            Search
          </Button>
        </div>
      </header>

      {/* Key Features */}
      <section className="features-grid">
        {[
          {
            icon: FaGavel,
            title: "AI Legal Search",
            desc: "Find relevant case laws instantly.",
            val: "/search",
          },
          {
            icon: FaRobot,
            title: "AI Chatbot",
            desc: "Ask legal questions & get explanations.",
            val: "/chatbot",
          },
          {
            icon: FaUserShield,
            title: "Case Outcome Prediction",
            desc: "Use AI to predict legal outcomes.",
            val: "/prediction",
          },
        ].map(({ icon: Icon, title, desc, val }, index) => (
          <Card
            key={index}
            className="feature-card"
            style={{
              backgroundColor: darkMode ? "#2a3b4f" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <CardContent className="card-content">
              <Icon className="feature-icon" />
              <Link to={val} className="feature-link">
                <h3 className="feature-title">{title}</h3>
              </Link>
              <p className="feature-desc">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Additional Legal Research Features */}
      <section className="extra-features-grid">
        {[
          {
            icon: FaUniversity,
            title: "Legal Education & Resources",
            desc: "Access guides, book summaries, and legal courses.",
            val: "/education",
          },
          {
            icon: FaChartLine,
            title: "Contributor Ranking System",
            desc: "Engage in discussions and get ranked.",
            val: "",
          },
          {
            icon: FaBalanceScale,
            title: "Virtual Courts & ODR",
            desc: "AI-mediated arbitration & remote hearings.",
            val: "/virtual",
          },
          {
            icon: FaGlobe,
            title: "Sustainability & Paperless Courts",
            desc: "Digitalizing legal processes.",
            val: "/summarised",
          },
          {
            icon: FaUsers,
            title: "Community & Legal Updates",
            desc: "Webinars, legal reforms, and amendments.",
            val: "/community",
          },
        ].map(({ icon: Icon, title, desc, val }, index) => (
          <Card
            key={index}
            className="feature-card"
            style={{
              backgroundColor: darkMode ? "#2a3b4f" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <CardContent className="card-content">
              <Icon className="feature-icon" />
              {val ? (
                <Link to={val} className="feature-link">
                  <h3 className="feature-title">{title}</h3>
                </Link>
              ) : (
                <h3 className="feature-title">{title}</h3>
              )}
              <p className="feature-desc">{desc}</p>
              <Button className="explore-btn">Explore</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Samvidhan-Setu. Proudly Made in India.</p>
      </footer>
    </div>
  );
}
