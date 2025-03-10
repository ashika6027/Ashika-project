import { useState } from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import {
  Search,
  Filter,
  Download,
  Bookmark,
  Share2,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CaseLawSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cases, setCases] = useState([
    {
      title: "Landmark Privacy Case",
      court: "Supreme Court of India",
      year: "2017",
      summary:
        "This case of Justice K.S. Puttaswamy (Retd.) v. Union of India...",
      citation: "(2023) SC 1254",
      doc: "/The_case_of_Justice_K.docx"

 // Updated Word document path
    },
    {
      title: "Corporate Fraud Case",
      court: "Delhi High Court",
      year: "2009",
      summary: "A prominent example of corporate fraud is the Satyam...",
      citation: "(2024) DHC 567",
    },
  ]);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #141e30, #243b55)",
        minHeight: "100vh",
        padding: "24px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          color: "#66b2ff",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        AI Case Law Search
      </h1>

      {/* Search Bar & Filters */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          maxWidth: "600px",
          margin: "0 auto 24px",
        }}
      >
        <Input
          style={{
            flex: 1,
            backgroundColor: "#3b5268",
            color: "white",
            border: "1px solid #666",
            padding: "3px 15px",
          }}
          placeholder="Search case laws..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button style={{ backgroundColor: "#1e90ff", transform: "scale(1)" }}>
          <Search style={{ width: "20px", height: "20px" }} />
        </Button>
        <Button style={{ backgroundColor: "#555", transform: "scale(1)" }}>
          <Filter style={{ width: "20px", height: "20px" }} />
        </Button>
      </div>

      {/* Case List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {cases.map((caseItem, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card
              style={{
                backgroundColor: "#2a3b4f",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "16px",
              }}
            >
              <CardContent>
                <h2
                  style={{
                    fontSize: "20px",
                    color: "#66b2ff",
                    fontWeight: "bold",
                  }}
                >
                  {caseItem.title}
                </h2>
                <p style={{ color: "#ccc" }}>
                  {caseItem.court} - {caseItem.year}
                </p>
                <p style={{ color: "#ddd", marginTop: "8px" }}>
                  {caseItem.summary}
                </p>
                <p
                  style={{
                    color: "#bbb",
                    marginTop: "8px",
                    fontStyle: "italic",
                  }}
                >
                  Citation: {caseItem.citation}
                </p>

                {/* Action Buttons */}
                <div
                  style={{ display: "flex", gap: "12px", marginTop: "16px" }}
                >
                  <Button style={{ color: "#ccc" }}>
                    <Bookmark style={{ width: "20px", height: "20px" }} />
                  </Button>
                  <Button style={{ color: "#ccc" }}>
                    <Download style={{ width: "20px", height: "20px" }} />
                  </Button>
                  <Button style={{ color: "#ccc" }}>
                    <Share2 style={{ width: "20px", height: "20px" }} />
                  </Button>
                  <Button style={{ color: "#ccc" }}>
                    <MessageCircle style={{ width: "20px", height: "20px" }} />
                  </Button>
                </div>

                {/* Document Button - Only for cases that have a Word document */}
                {caseItem.doc && (
                  <a
                    href={caseItem.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "#1e90ff",
                      padding: "8px 16px",
                      textAlign: "center",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  >
                    View Case Document
                  </a>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
