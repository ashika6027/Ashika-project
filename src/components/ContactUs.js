import React from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import { Search, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "24px",
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "white"
    }}>
      {/* Hero Section */}
      <motion.header style={{ textAlign: "center", marginBottom: "48px" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#64B5F6" }}>About Us</h1>
        <p style={{ marginTop: "16px", fontSize: "18px", color: "#B0BEC5", maxWidth: "600px", margin: "0 auto" }}>
        "At Samvidhan Setu, we are a passionate team dedicated to revolutionizing legal research and assistance through cutting-edge AI technology. Our platform empowers users with intelligent insights, predictive analysis, and seamless collaboration to simplify complex legal challenges. By combining innovation with a deep understanding of the Indian legal system, we aim to bridge the gap between legal expertise and accessibility for all"
        </p>
      </motion.header>

      {/* Team Section */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#90CAF9", textAlign: "center", marginBottom: "24px" }}>Meet Our Team</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {["Tanmay - Founder ", "Ashika - AI Researcher", "Anshika  - Front End Developer", "Raj - LegalTech Developer "].map((member, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card style={{ backgroundColor: "#2A3B55", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
                <CardContent>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#90CAF9" }}>{member.split(" - ")[0]}</h3>
                  <p style={{ color: "#B0BEC5" }}>{member.split(" - ")[1]}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#90CAF9", textAlign: "center", marginBottom: "24px" }}>Our Journey</h2>
        <motion.ul style={{ color: "#B0BEC5", maxWidth: "600px", margin: "0 auto", paddingLeft: "16px", borderLeft: "4px solid #64B5F6", lineHeight: "1.8" }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <li><strong>📌February 2025:</strong> Project conceptualized and development began.</li>
          <li><strong>📌March 2025:</strong> AI-powered legal research platform launched.</li>
          <li><strong>📌Upcoming:</strong> Expanded to include legal education and collaboration tools.</li>
        </motion.ul>
      </section>

      {/* Contact Section */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#90CAF9", textAlign: "center", marginBottom: "24px" }}>Contact Us</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card style={{ backgroundColor: "#2A3B55", padding: "20px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
              <CardContent>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#90CAF9" }}>Reach Out</h3>
                <p style={{ color: "#B0BEC5", marginTop: "10px", display: "flex", alignItems: "center" }}><Mail style={{ marginRight: "8px" }} /> tanmaysingh8246@gmail.com</p>
                <p style={{ color: "#B0BEC5", marginTop: "10px", display: "flex", alignItems: "center" }}><Phone style={{ marginRight: "8px" }} /> +91 9304444091</p>
                <p style={{ color: "#B0BEC5", marginTop: "10px", display: "flex", alignItems: "center" }}><MapPin style={{ marginRight: "8px" }} /> New Delhi, India</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card style={{ backgroundColor: "#2A3B55", padding: "20px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
              <CardContent>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#90CAF9" }}>Message Us</h3>
                <Input type="text" placeholder="Your Name" style={{ backgroundColor: "#616161", color: "white", marginBottom: "12px", padding: "10px", borderRadius: "8px", width: "100%" }} />
                <Input type="email" placeholder="Your Email" style={{ backgroundColor: "#616161", color: "white", marginBottom: "12px", padding: "10px", borderRadius: "8px", width: "100%" }} />
                <Input type="text" placeholder="Your Message" style={{ backgroundColor: "#616161", color: "white", marginBottom: "12px", padding: "10px", borderRadius: "8px", width: "100%" }} />
                <Button style={{ backgroundColor: "#1976D2", color: "white", width: "100%" }} onMouseOver={(e) => e.target.style.backgroundColor = "#0D47A1"} onMouseOut={(e) => e.target.style.backgroundColor = "#1976D2"}>
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>

    
  );
};

export default AboutUsPage;