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
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-blue-300 text-3xl font-bold text-center">Case Outcome Prediction</h1>
      <p className="text-gray-300 text-center mt-2">AI-powered case success prediction with legal strategies.</p>

      {/* Case Input Section */}
      <div className="mt-6 flex justify-center">
        <TextField
          variant="outlined"
          className="w-1/2 bg-gray-800 text-white border border-gray-700 rounded-md"
          placeholder="Enter case details..."
          value={caseDetails}
          onChange={(e) => setCaseDetails(e.target.value)}
          InputProps={{ style: { color: "white" } }}
        />
        <Button 
          variant="contained" 
          className="ml-2 bg-blue-500 hover:scale-105" 
          onClick={handlePredict}
        >
          <FaSearch className="mr-2" /> Predict
        </Button>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div className="mt-6 text-center">
          <p className="text-blue-400 text-xl font-bold">Success Probability: {prediction.probability}%</p>
          <div className="w-1/2 mx-auto bg-gray-700 rounded-full h-6 mt-2 overflow-hidden">
            <div
              className="h-full text-white text-center text-sm font-bold flex items-center justify-center"
              style={{ 
                width: `${prediction.probability}%`, 
                backgroundColor: prediction.probability > 70 ? "#4CAF50" 
                  : prediction.probability > 40 ? "#FFC107" 
                  : "#F44336"
              }}
            >
              {prediction.probability}%
            </div>
          </div>
          <p className="text-gray-300 mt-2">Reasoning: {prediction.reasoning}</p>
          <p className="text-gray-300 mt-2">Recommended Strategy: {prediction.strategy}</p>
          <div className="mt-4 text-left inline-block">
            <p className="text-green-400 font-bold">Pros:</p>
            <ul className="list-disc list-inside text-gray-300">
              {prediction.pros.map((pro, index) => <li key={index}>{pro}</li>)}
            </ul>
            <p className="text-red-400 font-bold mt-2">Cons:</p>
            <ul className="list-disc list-inside text-gray-300">
              {prediction.cons.map((con, index) => <li key={index}>{con}</li>)}
            </ul>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: FaGavel, title: "Comparative Case Analysis", desc: "View similar case verdicts and key legal arguments." },
          { icon: FaChartLine, title: "Risk Assessment", desc: "Understand risks and explore alternative dispute resolutions." },
          { icon: FaUserShield, title: "Legal Strategy Suggestions", desc: "AI recommends strategies to strengthen your case." },
          { icon: FaBalanceScale, title: "Multi-Jurisdiction Analysis", desc: "Compare case outcomes across different legal jurisdictions." },
          { icon: FaComment, title: "Lawyer Consultation", desc: "Get case validation from legal professionals." }
        ].map((feature, index) => (
          <Card key={index} className="bg-gray-800 p-6 shadow-lg hover:scale-105 cursor-pointer" onClick={() => alert(`${feature.title}: More details coming soon!`)}>
            <CardContent>
              <feature.icon className="text-blue-400 text-4xl mb-4" />
              <h2 className="text-white text-xl font-bold">{feature.title}</h2>
              <p className="text-gray-300 mt-2">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
