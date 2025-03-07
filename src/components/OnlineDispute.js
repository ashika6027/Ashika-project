import { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material"; // Fixed import
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
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-blue-300 text-3xl font-bold text-center">
        Online Dispute Resolution
      </h1>
      <p className="text-gray-300 text-center mt-2">
        AI-driven mediation and dispute resolution.
      </p>

      {/* Input Field */}
      <div className="mt-6 flex justify-center">
        <TextField
          variant="outlined"
          className="w-1/2"
          placeholder="Enter dispute details..."
          value={disputeDetails}
          onChange={(e) => setDisputeDetails(e.target.value)}
          sx={{ bgcolor: "#1e293b", color: "white", borderRadius: 1 }} // MUI styling
        />
        <Button
          className="ml-2 bg-blue-500 hover:scale-105"
          onClick={handleResolve}
          variant="contained"
          startIcon={<FaSearch />}
        >
          Resolve
        </Button>
      </div>

      {/* Resolution Suggestion */}
      {resolution && (
        <div className="mt-6 text-center">
          <p className="text-blue-400 text-xl font-bold">
            Resolution Suggestion: {resolution.suggestion}
          </p>
          <p className="text-gray-300 mt-2">Next Steps: {resolution.nextSteps}</p>
          <p className="text-gray-300 mt-2">Sentiment Analysis: {sentiment}</p>
          <p className="text-gray-300 mt-2">Resolution Score: {resolutionScore}/100</p>
        </div>
      )}

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{
          title: "AI-Powered Mediator",
          description: "Get AI-guided dispute mediation.",
          icon: <FaRobot className="text-blue-400 text-4xl mb-4" />,
          action: "AI Mediator Bot will guide you through the resolution process."
        },
        {
          title: "Live Voting & Polls",
          description: "Allow all parties to vote on resolution terms.",
          icon: <FaPoll className="text-blue-400 text-4xl mb-4" />,
          action: "Start a live poll to let parties vote on resolution options."
        },
        {
          title: "Document Submission",
          description: "Drag and drop evidence for review.",
          icon: <FaFileUpload className="text-blue-400 text-4xl mb-4" />,
          action: "Upload and submit relevant dispute documents."
        },
        {
          title: "Case Sentiment Analysis",
          description: "AI detects discussion tone (aggressive, neutral, cooperative).",
          icon: <FaSmile className="text-blue-400 text-4xl mb-4" />,
          action: "AI detects tone and attitude of all parties."
        },
        {
          title: "Resolution Score",
          description: "Encourages fair resolution and builds credibility.",
          icon: <FaBalanceScale className="text-blue-400 text-4xl mb-4" />,
          action: "Resolution score based on fairness and cooperation."
        }].map((feature, index) => (
          <Card
            key={index}
            className="bg-gray-800 shadow-lg hover:scale-105 cursor-pointer"
            sx={{ p: 3 }}
            onClick={() => alert(feature.action)}
          >
            <CardContent>
              {feature.icon}
              <h2 className="text-white text-xl font-bold">{feature.title}</h2>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
