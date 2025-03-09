import { useState } from "react";
import { Card, CardContent, Button, Input } from "@mui/material";
import { 
  FaRobot, FaBalanceScale, FaLanguage, FaHandsHelping, 
  FaFileAlt, FaMicrophone, FaBook, FaShieldAlt, FaExclamationTriangle 
} from "react-icons/fa";

export default function LegalAssistance() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [documentType, setDocumentType] = useState("contract");
  const [language, setLanguage] = useState("English");

  const handleSearch = () => {
    setResponse("AI-generated legal guidance will appear here.");
  };

  const handleVoiceSearch = () => {
    alert("Voice recognition activated. Speak your legal query.");
  };

  const handleDocumentGeneration = () => {
    alert(`Generating ${documentType} template...`);
  };

  const handleLegalAidCheck = () => {
    alert("Checking eligibility for free legal aid...");
  };

  const handleCaseRiskAssessment = () => {
    alert("Analyzing case success probability...");
  };

  const handleEmergencyHelp = () => {
    alert("Connecting to emergency legal assistance...");
  };

  return (
    <div style={{ background: "linear-gradient(to right, #141e30, #243b55)", minHeight: "100vh", color: "white", padding: "20px" }}>
      <h1 style={{ color: "#66b2ff", fontSize: "28px", textAlign: "center", fontWeight: "bold" }}>AI Legal Assistance</h1>
      <p style={{ color: "#ccc", textAlign: "center", marginTop: "10px" }}>Get AI-powered legal advice, FAQs, and pro bono legal aid.</p>

      {/* Search Section */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", gap: "10px" }}>
        <Input
          style={{ backgroundColor: "#3b5268", color: "white", padding: "10px", width: "50%" }}
          placeholder="Ask a legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" style={{ backgroundColor: "#007bff" }} onClick={handleSearch}>Search</Button>
        <Button variant="contained" style={{ backgroundColor: "#dc3545" }} onClick={handleVoiceSearch}>
          <FaMicrophone />
        </Button>
      </div>
      {response && <p style={{ color: "#66b2ff", textAlign: "center", marginTop: "10px" }}>{response}</p>}

      {/* Features Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginTop: "30px" }}>
        {/* AI Legal Document Generator */}
        <Card style={{ backgroundColor: "#2a3b4f", padding: "20px", boxShadow: "3px 3px 10px rgba(0,0,0,0.3)" }}>
          <CardContent>
            <FaFileAlt style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />
            <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#ffffff" }}>AI Legal Document Generator</h2>
            <p style={{ color: "#d1d5db", marginTop: "5px" }}>Generate contracts, affidavits, and more.</p>
            <select style={{ width: "100%", backgroundColor: "#3b5268", padding: "10px", marginTop: "10px", color: "white" }} value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
              <option value="contract">Contract</option>
              <option value="affidavit">Affidavit</option>
              <option value="petition">Petition</option>
            </select>
            <Button variant="contained" style={{ marginTop: "10px", backgroundColor: "#007bff" }} onClick={handleDocumentGeneration}>Generate</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
