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
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
      <Card sx={{ backgroundColor: "#1E1E1E", boxShadow: 3, padding: 3, marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
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
            sx={{ backgroundColor: "#333", color: "white", marginBottom: 2 }}
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
              <Button variant="contained" component="span" startIcon={<Upload />} sx={{ backgroundColor: "#1976d2" }}>
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
        <Card sx={{ backgroundColor: "#1E1E1E", boxShadow: 3, padding: 3 }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              Prediction Results
            </Typography>

            {/* Probability Bars */}
            <Typography variant="body1" color="gray">Win Probability: {outcome.winProbability}%</Typography>
            <LinearProgress variant="determinate" value={outcome.winProbability} sx={{ marginBottom: 2, height: 10 }} />

            <Typography variant="body1" color="gray">Loss Probability: {outcome.lossProbability}%</Typography>
            <LinearProgress variant="determinate" value={outcome.lossProbability} sx={{ marginBottom: 2, height: 10, backgroundColor: "red" }} />

            {/* Strategy Suggestion */}
            <Typography variant="subtitle1" color="gray" fontWeight="bold">Strategy Suggestion:</Typography>
            <Typography variant="body2" color="lightgray">{outcome.strategy}</Typography>

            {/* Reference Cases */}
            <Typography variant="subtitle1" color="gray" fontWeight="bold" sx={{ marginTop: 2 }}>Reference Cases:</Typography>
            <ul style={{ paddingLeft: 20, color: "#B0BEC5" }}>
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
