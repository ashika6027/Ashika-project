import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { CheckCircle, AlertTriangle, XCircle, FileText, Mic } from "lucide-react";

const FactChecking = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleCheck = async () => {
    // Simulated AI response with random results
    const mockResults = [
      { status: "Verified", confidence: 95, color: "green", icon: <CheckCircle size={40} color="green" /> },
      { status: "Partially Verified", confidence: 65, color: "orange", icon: <AlertTriangle size={40} color="orange" /> },
      { status: "Contradicted", confidence: 30, color: "red", icon: <XCircle size={40} color="red" /> },
    ];
    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(randomResult);
    setConfidence(randomResult.confidence);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) setUploadedFile(file.name);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f172a, #1e293b, #0f172a)",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center" style={{ color: "#60a5fa", marginBottom: "20px", fontWeight: "bold" }}>
        AI-Powered Fact-Checking & Cross-Examination
      </Typography>

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography variant="body1" style={{ marginBottom: "10px", color: "#cbd5e1" }}>
          Enter a claim for verification:
        </Typography>

        <TextField
          fullWidth
          multiline
          minRows={3}
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type or paste a legal statement..."
          InputProps={{
            style: {
              color: "white",
              backgroundColor: "#334155",
              borderRadius: "5px",
              padding: "10px",
              border: "1px solid #475569",
            },
          }}
          style={{ marginBottom: "15px" }}
        />

        <div style={{ display: "flex", alignItems: "center", marginTop: "20px", gap: "10px" }}>
          <Button variant="contained" color="primary" onClick={handleCheck}>
            Check Fact
          </Button>

          {/* File Upload */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#475569",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              color: "#93c5fd",
            }}
          >
            <FileText style={{ marginRight: "5px" }} />
            <input type="file" hidden onChange={handleFileUpload} />
            <span>{uploadedFile ? uploadedFile : "Upload Document"}</span>
          </label>

          {/* Voice Input (Future Feature) */}
          <Button variant="contained" style={{ backgroundColor: "#64748b", color: "#93c5fd" }} onClick={() => alert("Voice input coming soon!")}>
            <Mic />
          </Button>
        </div>

        {/* Display Fact Check Result */}
        {result && (
          <Card
            style={{
              backgroundColor: "#334155",
              marginTop: "20px",
              padding: "20px",
              textAlign: "center",
              borderRadius: "10px",
              border: "1px solid #475569",
            }}
          >
            <CardContent>
              {result.icon}
              <Typography variant="h6" style={{ color: result.color, marginTop: "10px" }}>
                {result.status}
              </Typography>
              <Typography variant="body1" style={{ color: "white" }}>
                Confidence Level: {confidence}%
              </Typography>
              <Typography variant="caption" style={{ display: "block", marginTop: "5px", color: "#cbd5e1" }}>
                Verified Sources: Supreme Court, Legal Journals
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
                Download Report
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FactChecking;
