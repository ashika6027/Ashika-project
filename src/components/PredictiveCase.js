import { useState } from "react";
import { Card, CardContent, Typography, Button, LinearProgress, TextField, Input } from "@mui/material";
import { Upload } from "lucide-react";

export default function PredictiveCaseOutcome() {
  const [caseDetails, setCaseDetails] = useState("");
  const [outcome, setOutcome] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePrediction = () => {
    // Simulated AI response
    setOutcome({
      winProbability: 75,
      lossProbability: 25,
      strategy: "Based on similar cases, focus on presenting strong evidence and witness credibility.",
      referenceCases: ["Case A v. State", "Case B v. Defendant"],
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to right, #1E2A38, #233447)", color: "white", padding: "20px" }}>
      <Card style={{ backgroundColor: "#2A3B4D", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
        <CardContent>
          <Typography variant="h5" style={{ color: "#87CEEB" }} gutterBottom>
            Predictive Case Outcome
          </Typography>
          <TextField
            multiline
            minRows={3}
            fullWidth
            variant="outlined"
            placeholder="Enter case details..."
            value={caseDetails}
            onChange={(e) => setCaseDetails(e.target.value)}
            style={{ backgroundColor: "#3A4B5C", color: "white", marginBottom: "15px", borderRadius: "5px" }}
            InputProps={{ style: { color: "white" } }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* File Upload */}
            <label htmlFor="file-upload">
              <input
                type="file"
                id="file-upload"
                hidden
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <Button variant="contained" component="span" startIcon={<Upload />} style={{ backgroundColor: "#1976d2", color: "white" }}>
                {selectedFile ? selectedFile.name : "Upload Case Documents"}
              </Button>
            </label>

            <Button variant="contained" color="primary" onClick={handlePrediction}>
              Predict Outcome
            </Button>
          </div>
        </CardContent>
      </Card>

      {outcome && (
        <Card style={{ backgroundColor: "#2A3B4D", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", padding: "20px", borderRadius: "10px" }}>
          <CardContent>
            <Typography variant="h5" style={{ color: "#87CEEB" }} gutterBottom>
              Prediction Results
            </Typography>

            {/* Probability Bars */}
            <Typography variant="body1" style={{ color: "#D3D3D3" }}>Win Probability: {outcome.winProbability}%</Typography>
            <LinearProgress variant="determinate" value={outcome.winProbability} style={{ marginBottom: "15px", height: "10px" }} />

            <Typography variant="body1" style={{ color: "#D3D3D3" }}>Loss Probability: {outcome.lossProbability}%</Typography>
            <LinearProgress variant="determinate" value={outcome.lossProbability} style={{ marginBottom: "15px", height: "10px", backgroundColor: "#D32F2F" }} />

            {/* Strategy Suggestion */}
            <Typography variant="subtitle1" style={{ color: "#B0BEC5", fontWeight: "bold" }}>Strategy Suggestion:</Typography>
            <Typography variant="body2" style={{ color: "#E0E0E0" }}>{outcome.strategy}</Typography>

            {/* Reference Cases */}
            <Typography variant="subtitle1" style={{ color: "#B0BEC5", fontWeight: "bold", marginTop: "15px" }}>Reference Cases:</Typography>
            <ul style={{ paddingLeft: "20px", color: "#B0BEC5" }}>
              {outcome.referenceCases.map((caseName, index) => (
                <li key={index}>{caseName}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
