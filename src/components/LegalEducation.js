import React from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  { title: "AI-Powered Legal Tutor", description: "Get AI-driven insights, case law explanations, and legal document summaries.", buttonText: "Learn More" },
  { title: "Legal Challenges & Simulations", description: "Participate in mock trials, legal debates, and AI-generated case challenges.", buttonText: "Explore" },
  { title: "Smart Legal Library", description: "Search legal books, comparative laws, and AI-generated case summaries.", buttonText: "Browse" },
  { title: "Community Q&A & Blogging", description: "Discuss legal issues, write blogs, and interact with legal professionals.", buttonText: "Join Now" },
  { title: "Certifications & Ranking", description: "Get recognized for your contributions and boost your legal career.", buttonText: "View Rankings" },
  { title: "Law Updates & Amendments", description: "Stay updated with the latest legal reforms and case law changes.", buttonText: "Read More" }
];

const LegalEducationPage = () => {
  return (
    <div style={{ 
      background: "linear-gradient(to right, #141e30, #243b55)", 
      minHeight: "100vh", 
      color: "white", 
      padding: "24px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>
      <motion.header 
        style={{ textAlign: "center", marginBottom: "32px" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#66b2ff" }}>Legal Education & Resources</h1>
        <p style={{ color: "#d1d5db", marginTop: "12px", fontSize: "18px" }}>Empower yourself with AI-driven legal research and immersive learning.</p>
      </motion.header>

      <motion.div 
        style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div style={{ position: "relative", width: "100%", maxWidth: "480px" }}>
          <TextField
            type="text"
            placeholder="Search legal topics, case laws, or books..."
            variant="outlined"
            fullWidth
            InputProps={{
              style: { 
                color: "white", 
                backgroundColor: "#3b5268", 
                borderRadius: "24px", 
                paddingLeft: "40px" 
              }
            }}
          />
          <Search style={{ position: "absolute", left: "12px", top: "12px", color: "#9ca3af" }} size={22} />
        </div>
      </motion.div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "16px", 
        width: "100%", 
        maxWidth: "1200px" 
      }}>
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card 
              style={{ 
                backgroundColor: "#2a3b4f", 
                padding: "16px", 
                borderRadius: "16px", 
                boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)", 
                cursor: "pointer", 
                transition: "transform 0.3s" 
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ height: "4px", backgroundColor: "#66b2ff", width: "100%" }}></div>
              <CardContent>
                <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#93c5fd", marginBottom: "12px" }}>{section.title}</h2>
                <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: "1.5" }}>{section.description}</p>
                <Button 
                  variant="contained" 
                  fullWidth
                  style={{ 
                    marginTop: "12px", 
                    backgroundColor: "#3b5268", 
                    color: "white",
                    transition: "background-color 0.3s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2a3b4f"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3b5268"}
                >
                  {section.buttonText}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LegalEducationPage;
