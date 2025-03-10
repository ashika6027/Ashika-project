import { useState } from "react";
import { Card, CardContent, Button, Input } from "@mui/material";
import { FaFileAlt, FaMicrophone } from "react-icons/fa";

// Component for Dynamic Legal Form
const LegalForm = ({ documentType }) => {
  const [formData, setFormData] = useState({
    partyOne: "",
    partyTwo: "",
    agreementDate: "",
    statement: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#2a3b4f", padding: "15px", borderRadius: "10px", marginTop: "15px" }}>
      <h3 style={{ color: "#66b2ff" }}>Fill {documentType} Details</h3>

      {documentType === "contract" && (
        <>
          <input type="text" name="partyOne" placeholder="Party One Name" value={formData.partyOne} onChange={handleChange} style={inputStyle} />
          <input type="text" name="partyTwo" placeholder="Party Two Name" value={formData.partyTwo} onChange={handleChange} style={inputStyle} />
          <input type="date" name="agreementDate" value={formData.agreementDate} onChange={handleChange} style={inputStyle} />
        </>
      )}

      {documentType === "affidavit" && (
        <>
          <textarea name="statement" placeholder="Enter your affidavit statement" value={formData.statement} onChange={handleChange} style={inputStyle}></textarea>
        </>
      )}

      {documentType === "petition" && (
        <>
          <textarea name="reason" placeholder="State the reason for petition" value={formData.reason} onChange={handleChange} style={inputStyle}></textarea>
        </>
      )}

      <Button variant="contained" style={{ backgroundColor: "#28a745", marginTop: "10px" }}>
        Submit {documentType}
      </Button>
    </div>
  );
};

const inputStyle = {
  width: "100%", padding: "10px", margin: "5px 0", backgroundColor: "#3b5268", color: "white", border: "none", borderRadius: "5px"
};

// Main Component
export default function LegalAssistance() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [documentType, setDocumentType] = useState("contract");

  const handleSearch = () => {
    setResponse("AI-generated legal guidance will appear here.");
  };

  const handleVoiceSearch = () => {
    alert("Voice recognition activated. Speak your legal query.");
  };

  const handleDocumentGeneration = () => {
    alert(`Generating ${documentType} template...`);
  };

  return (
    <div style={{ background: "linear-gradient(to right, #141e30, #243b55)", minHeight: "100vh", color: "white", padding: "20px" }}>
      <h1 style={{ color: "#66b2ff", fontSize: "28px", textAlign: "center", fontWeight: "bold" }}>AI Legal Document Generator</h1>
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
            <Button variant="contained" style={{ marginTop: "10px", backgroundColor: "#007bff" }} onClick={handleDocumentGeneration}>
              Generate
            </Button>

            {/* Dynamic Form Component */}
            <LegalForm documentType={documentType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
