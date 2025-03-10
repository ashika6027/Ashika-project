import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "linear-gradient(to right, #141e30, #243b55)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#81a4cd",
          marginBottom: "10px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Samvidhan-Setu
      </motion.h1>
      <p
        style={{
          color: "#d1d9e6",
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "20px",
        }}
      >
        Your AI-powered solution for legal research, virtual courts, dispute
        resolution, and case tracking.
      </p>
      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        <Button
          style={{
            backgroundColor: "#2a3b4f",
            color: "white",
            padding: "12px 24px",
            borderRadius: "12px",
            fontSize: "1rem",
            transition: "transform 0.2s",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          onClick={() => navigate("/landing")} // Navigates to Landing Page
        >
          Get Started
        </Button>
        <Button
          style={{
            backgroundColor: "#3b5268",
            color: "white",
            padding: "12px 24px",
            borderRadius: "12px",
            fontSize: "1rem",
            transition: "transform 0.2s",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}