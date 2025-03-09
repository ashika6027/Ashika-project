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
      date: "Jan 15, 2023",
      summary:
        "This case established the right to privacy as a fundamental right...",
      citation: "(2023) SC 1254",
    },
    {
      title: "Corporate Fraud Case",
      court: "Delhi High Court",
      date: "Feb 10, 2024",
      summary:
        "A major corporate fraud case involving misrepresentation of financial statements...",
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
                backgroundColor: "#2a3b4f", // Updated box color
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
                  {caseItem.court} - {caseItem.date}
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
