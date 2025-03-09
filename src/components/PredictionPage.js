import { useState } from "react";
import { Card, CardContent, Button, TextField } from "@mui/material";
import { FaGavel, FaChartLine, FaUserShield, FaBalanceScale, FaSearch, FaComment } from "react-icons/fa";

export default function CaseOutcomePrediction() {
  const [caseDetails, setCaseDetails] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    if (!caseDetails.trim()) {
      alert("Please enter case details.");
      return;
    }
    
    // Simulated AI response
    setPrediction({
      probability: 75,
      reasoning: "Based on past 50 similar cases, majority had favorable outcomes due to strong evidence.",
      strategy: "Strengthen your evidence and consult an expert witness to increase success probability.",
      pros: ["Strong evidence supports the case", "Similar cases had favorable outcomes"],
      cons: ["Possible counterarguments", "Need for expert witness testimony"]
    });
  };

  return (
    <div style={{ 
      background: "linear-gradient(to right, #141e30, #243b55)", 
      minHeight: "100vh", 
      color: "white", 
      padding: "20px" 
    }}>
      <h1 style={{ color: "#66b2ff", fontSize: "28px", textAlign: "center", fontWeight: "bold" }}>
        Case Outcome Prediction
      </h1>
      <p style={{ color: "#ccc", textAlign: "center", marginTop: "10px" }}>
        AI-powered case success prediction with legal strategies.
      </p>

      {/* Case Input Section */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", gap: "10px" }}>
        <TextField
          variant="outlined"
          style={{
            width: "50%",
            backgroundColor: "#3b5268",
            color: "white",
            borderRadius: "5px",
            border: "1px solid #444",
          }}
          placeholder="Enter case details..."
          value={caseDetails}
          onChange={(e) => setCaseDetails(e.target.value)}
          InputProps={{ style: { color: "white" } }}
        />
        <Button 
          variant="contained" 
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
          onClick={handlePredict}
        >
          <FaSearch style={{ marginRight: "8px" }} /> Predict
        </Button>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <p style={{ color: "#66b2ff", fontSize: "22px", fontWeight: "bold" }}>
            Success Probability: {prediction.probability}%
          </p>
          <div style={{ 
            width: "50%", 
            backgroundColor: "#333", 
            borderRadius: "50px", 
            height: "20px", 
            margin: "10px auto", 
            overflow: "hidden" 
          }}>
            <div
              style={{
                height: "100%",
                width: `${prediction.probability}%`,
                backgroundColor: prediction.probability > 70 ? "#4CAF50" 
                  : prediction.probability > 40 ? "#FFC107" 
                  : "#F44336",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {prediction.probability}%
            </div>
          </div>
          <p style={{ color: "#ccc", marginTop: "10px" }}>Reasoning: {prediction.reasoning}</p>
          <p style={{ color: "#ccc", marginTop: "10px" }}>Recommended Strategy: {prediction.strategy}</p>

          <div style={{ display: "inline-block", textAlign: "left", marginTop: "20px" }}>
            <p style={{ color: "#4CAF50", fontWeight: "bold" }}>Pros:</p>
            <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
              {prediction.pros.map((pro, index) => <li key={index}>{pro}</li>)}
            </ul>
            <p style={{ color: "#F44336", fontWeight: "bold", marginTop: "10px" }}>Cons:</p>
            <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
              {prediction.cons.map((con, index) => <li key={index}>{con}</li>)}
            </ul>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "20px", 
        marginTop: "40px" 
      }}>
        {[
          { icon: FaGavel, title: "Comparative Case Analysis", desc: "View similar case verdicts and key legal arguments." },
          { icon: FaChartLine, title: "Risk Assessment", desc: "Understand risks and explore alternative dispute resolutions." },
          { icon: FaUserShield, title: "Legal Strategy Suggestions", desc: "AI recommends strategies to strengthen your case." },
          { icon: FaBalanceScale, title: "Multi-Jurisdiction Analysis", desc: "Compare case outcomes across different legal jurisdictions." },
          { icon: FaComment, title: "Lawyer Consultation", desc: "Get case validation from legal professionals." }
        ].map((feature, index) => (
          <Card 
            key={index} 
            style={{ 
              backgroundColor: "#2a3b4f", 
              padding: "20px", 
              boxShadow: "3px 3px 10px rgba(0,0,0,0.3)", 
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onClick={() => alert(`${feature.title}: More details coming soon!`)}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <CardContent>
              <feature.icon style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />
              <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>{feature.title}</h2>
              <p style={{ color: "#ccc", marginTop: "5px" }}>{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
