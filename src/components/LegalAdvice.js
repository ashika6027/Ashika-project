import React, { useState } from "react";
import {
  FaMicrophone,
  FaBookmark,
  FaSync,
  FaFileAlt,
  FaCommentDots,
  FaBalanceScale,
  FaExclamationTriangle,
  FaGlobe,
  FaGraduationCap,
  FaShieldAlt,
  FaUserSecret,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, Input, Button } from "@mui/material";

const LegalAdvice = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [savedQueries, setSavedQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse("AI-generated legal advice will appear here.");
      setLoading(false);
    }, 1500);
  };

  const handleVoiceQuery = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse("AI is processing your voice query...");
      setLoading(false);
    }, 1500);
  };

  const saveQuery = () => {
    if (query) setSavedQueries([...savedQueries, query]);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #141e30, #243b55)",
        minHeight: "100vh",
        color: "white",
        padding: "24px",
      }}
    >
      <h1
        style={{
          color: "#90CAF9",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Samvidhan-Setu Legal Assistance
      </h1>
      <p style={{ color: "#B0BEC5", textAlign: "center", marginTop: "8px" }}>
        Get AI-generated legal insights, document analysis, and more.
      </p>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Input
          style={{
            width: "50%",
            backgroundColor: "#3b5268",
            color: "white",
            border: "1px solid #555",
            padding: "8px",
          }}
          placeholder="Enter your legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "#2196F3",
            color: "white",
            padding: "10px",
          }}
          onClick={handleSearch}
        >
          {loading ? (
            <FaSync style={{ animation: "spin 1s linear infinite" }} />
          ) : (
            "Get Advice"
          )}
        </Button>
        <Button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
          }}
          onClick={handleVoiceQuery}
        >
          <FaMicrophone />
        </Button>
        <Button
          style={{
            backgroundColor: "#FFC107",
            color: "white",
            padding: "10px",
          }}
          onClick={saveQuery}
        >
          <FaBookmark />
        </Button>
      </div>

      {response && (
        <p style={{ color: "#90CAF9", textAlign: "center", marginTop: "16px" }}>
          {response}
        </p>
      )}

      <div style={{ marginTop: "24px" }}>
        {savedQueries.length > 0 && (
          <div>
            <h2
              style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
            >
              Saved Queries
            </h2>
            <ul style={{ color: "#B0BEC5", marginTop: "8px" }}>
              {savedQueries.map((q, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: "#3b5268",
                    padding: "8px",
                    borderRadius: "6px",
                    marginTop: "4px",
                  }}
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {[
          {
            icon: FaFileAlt,
            title: "Legal Document Generator",
            desc: "Generate contracts, affidavits, and petitions automatically.",
            link: "/assistant",
          },
          {
            icon: FaCommentDots,
            title: "Live AI & Lawyer Chat",
            desc: "AI chatbot and verified lawyers provide legal guidance.",
          },
          {
            icon: FaBalanceScale,
            title: "Case Law Recommendations",
            desc: "Get AI-recommended relevant case laws and judgments.",
          },
          {
            icon: FaExclamationTriangle,
            title: "Risk Assessment",
            desc: "AI predicts case success probability and risks.",
          },
          {
            icon: FaGlobe,
            title: "Multi-Language Support",
            desc: "Access legal assistance in multiple languages.",
          },
          {
            icon: FaGraduationCap,
            title: "Legal Education Hub",
            desc: "Learn legal terms, take quizzes, and watch educational videos.",
          },
          {
            icon: FaShieldAlt,
            title: "Data Encryption & Privacy",
            desc: "Your legal queries and data are secured with encryption.",
          },
          {
            icon: FaUserSecret,
            title: "Anonymous Mode",
            desc: "Ask legal questions without revealing your identity.",
          },
        ].map(({ icon: Icon, title, desc }, index) => (
          <Card
            key={index}
            style={{
              backgroundColor: "#2a3b4f", // Updated box color
              padding: "24px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.2s",
              borderRadius: "10px",
            }}
          >
            <Icon
              style={{
                color: "#90CAF9",
                fontSize: "32px",
                marginBottom: "12px",
              }}
            />
            <h2
              style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
            >
              {title}
            </h2>
            <p style={{ color: "#B0BEC5", marginTop: "8px" }}>{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LegalAdvice;
