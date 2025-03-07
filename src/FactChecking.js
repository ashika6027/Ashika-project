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
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white", padding: "20px" }}>
      <Typography variant="h4" align="center" color="lightblue" gutterBottom>
        AI-Powered Fact-Checking & Cross-Examination
      </Typography>

      <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "#333", padding: "20px", borderRadius: "10px" }}>
        <Typography variant="body1" gutterBottom>
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
          InputProps={{ style: { color: "white", backgroundColor: "#444" } }}
          sx={{ marginBottom: "15px" }}
        />

        <div style={{ display: "flex", alignItems: "center", marginTop: "20px", gap: "10px" }}>
          <Button variant="contained" color="primary" onClick={handleCheck}>
            Check Fact
          </Button>

          {/* File Upload */}
          <label style={{ display: "flex", alignItems: "center", backgroundColor: "#555", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
            <FileText style={{ marginRight: "5px", color: "lightblue" }} />
            <input type="file" hidden onChange={handleFileUpload} />
            <span>{uploadedFile ? uploadedFile : "Upload Document"}</span>
          </label>

          {/* Voice Input (Future Feature) */}
          <Button variant="contained" style={{ backgroundColor: "#666" }} onClick={() => alert("Voice input coming soon!")}>
            <Mic style={{ color: "lightblue" }} />
          </Button>
        </div>

        {/* Display Fact Check Result */}
        {result && (
          <Card sx={{ backgroundColor: "#444", marginTop: "20px", padding: "20px", textAlign: "center" }}>
            <CardContent>
              {result.icon}
              <Typography variant="h6" style={{ color: result.color, marginTop: "10px" }}>
                {result.status}
              </Typography>
              <Typography variant="body1" color="white">
                Confidence Level: {confidence}%
              </Typography>
              <Typography variant="caption" style={{ display: "block", marginTop: "5px", color: "lightgray" }}>
                Verified Sources: Supreme Court, Legal Journals
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>
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
