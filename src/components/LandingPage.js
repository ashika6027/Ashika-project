import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUserShield, FaGavel, FaRobot, FaSun, FaMoon, FaQuestionCircle, FaUniversity, FaChartLine, FaBalanceScale, FaGlobe, FaUsers } from "react-icons/fa";
import { Button, Card, CardContent, Input } from "@mui/material";
import "./styles.css";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className={`main-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">AI Legal Research</h1>
        <div className="nav-links">
          <Button className="nav-btn">Home</Button>
          <Button className="nav-btn">AI Chatbot</Button>
          <Button className="nav-btn">Case Search</Button>
          <Button className="nav-btn">Login</Button>
          <Button className="nav-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          AI-Powered Legal Research & Assistance
        </motion.h1>
        <p className="hero-text">
          Search legal cases, interact with an AI chatbot, and predict case outcomes with our AI-driven platform.
        </p>
        <div className="search-box">
          <Input className="search-input" placeholder="Search for legal cases..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button className="search-btn">
            <FaSearch className="search-icon" /> Search
          </Button>
        </div>
      </header>

      {/* Key Features */}
      <section className="features-grid">
        {[{ icon: FaGavel, title: "AI Legal Search", desc: "Find relevant case laws instantly." },
          { icon: FaRobot, title: "AI Chatbot", desc: "Ask legal questions & get explanations." },
          { icon: FaUserShield, title: "Case Outcome Prediction", desc: "Use AI to predict legal outcomes." }]
          .map(({ icon: Icon, title, desc }, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="card-content">
                <Icon className="feature-icon" />
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </CardContent>
            </Card>
        ))}
      </section>

      {/* Additional Legal Research Features */}
      <section className="extra-features-grid">
        {[{ icon: FaUniversity, title: "Legal Education & Resources", desc: "Access guides, book summaries, and legal courses." },
          { icon: FaChartLine, title: "Contributor Ranking System", desc: "Engage in discussions and get ranked." },
          { icon: FaBalanceScale, title: "Virtual Courts & ODR", desc: "AI-mediated arbitration & remote hearings." },
          { icon: FaGlobe, title: "Sustainability & Paperless Courts", desc: "Digitalizing legal processes." },
          { icon: FaUsers, title: "Community & Legal Updates", desc: "Webinars, legal reforms, and amendments." }]
          .map(({ icon: Icon, title, desc }, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="card-content">
                <Icon className="feature-icon" />
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
                <Button className="explore-btn">Explore</Button>
              </CardContent>
            </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 AI Legal Research Platform. Proudly Made in India.</p>
      </footer>
    </div>
  );
}
