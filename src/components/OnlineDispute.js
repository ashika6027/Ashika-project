import { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { FaRobot, FaPoll, FaFileUpload, FaSmile, FaBalanceScale, FaSearch } from "react-icons/fa";

export default function OnlineDisputeResolution() {
  const [disputeDetails, setDisputeDetails] = useState("");
  const [resolution, setResolution] = useState(null);
  const [sentiment, setSentiment] = useState("Neutral");
  const [resolutionScore, setResolutionScore] = useState(80);

  const handleResolve = () => {
    setResolution({
      suggestion: "Based on past cases, mediation is the best approach.",
      nextSteps: "Connect with a mediator and gather relevant documents.",
    });
    setSentiment("Cooperative");
    setResolutionScore(90);
  };

  return (
    <div style={{ 
      background: "linear-gradient(to right, #141e30, #243b55)", 
      minHeight: "100vh", 
      color: "white", 
      padding: "20px" 
    }}>
      <h1 style={{ color: "#66b2ff", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
        Online Dispute Resolution
      </h1>
      <p style={{ color: "#d0d0d0", textAlign: "center", marginTop: "10px" }}>
        AI-driven mediation and dispute resolution.
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Enter dispute details..."
          value={disputeDetails}
          onChange={(e) => setDisputeDetails(e.target.value)}
          style={{ 
            backgroundColor: "#3b5268", 
            color: "white", 
            borderRadius: "5px", 
            width: "50%" 
          }}
          InputProps={{ style: { color: "white" } }}
        />
        <Button
          onClick={handleResolve}
          variant="contained"
          startIcon={<FaSearch />}
          style={{ 
            marginLeft: "10px", 
            backgroundColor: "#3b5268", 
            color: "white",
            transition: "background-color 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2a3b4f"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3b5268"}
        >
          Resolve
        </Button>
      </div>

      {resolution && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#66b2ff", fontSize: "18px", fontWeight: "bold" }}>
            Resolution Suggestion: {resolution.suggestion}
          </p>
          <p style={{ color: "#d0d0d0", marginTop: "5px" }}>Next Steps: {resolution.nextSteps}</p>
          <p style={{ color: "#d0d0d0", marginTop: "5px" }}>Sentiment Analysis: {sentiment}</p>
          <p style={{ color: "#d0d0d0", marginTop: "5px" }}>Resolution Score: {resolutionScore}/100</p>
        </div>
      )}

      <div style={{ 
        marginTop: "30px", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "20px" 
      }}>
        {[{
          title: "AI-Powered Mediator",
          description: "Get AI-guided dispute mediation.",
          icon: <FaRobot style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />,
          action: "AI Mediator Bot will guide you through the resolution process."
        },
        {
          title: "Live Voting & Polls",
          description: "Allow all parties to vote on resolution terms.",
          icon: <FaPoll style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />,
          action: "Start a live poll to let parties vote on resolution options."
        },
        {
          title: "Document Submission",
          description: "Drag and drop evidence for review.",
          icon: <FaFileUpload style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />,
          action: "Upload and submit relevant dispute documents."
        },
        {
          title: "Case Sentiment Analysis",
          description: "AI detects discussion tone (aggressive, neutral, cooperative).",
          icon: <FaSmile style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />,
          action: "AI detects tone and attitude of all parties."
        },
        {
          title: "Resolution Score",
          description: "Encourages fair resolution and builds credibility.",
          icon: <FaBalanceScale style={{ color: "#66b2ff", fontSize: "32px", marginBottom: "10px" }} />,
          action: "Resolution score based on fairness and cooperation."
        }].map((feature, index) => (
          <Card key={index} 
            style={{ 
              backgroundColor: "#2a3b4f", 
              padding: "20px", 
              cursor: "pointer", 
              boxShadow: "0px 4px 6px rgba(0,0,0,0.2)", 
              borderRadius: "8px",
              transition: "transform 0.3s"
            }}
            onClick={() => alert(feature.action)}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <CardContent>
              {feature.icon}
              <h2 style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{feature.title}</h2>
              <p style={{ color: "#d0d0d0", marginTop: "5px" }}>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
