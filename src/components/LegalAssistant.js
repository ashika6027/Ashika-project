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
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-blue-300 text-3xl font-bold text-center">AI Legal Assistance</h1>
      <p className="text-gray-300 text-center mt-2">Get AI-powered legal advice, FAQs, and pro bono legal aid.</p>

      {/* Search Section */}
      <div className="mt-6 flex justify-center items-center space-x-3">
        <Input
          className="w-1/2 bg-gray-800 text-white border border-gray-700 px-3 py-2"
          placeholder="Ask a legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="contained" color="secondary" onClick={handleVoiceSearch}>
          <FaMicrophone />
        </Button>
      </div>
      {response && <p className="text-blue-400 text-center mt-4">{response}</p>}

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Legal Document Generator */}
        <Card sx={{ bgcolor: "gray.800", p: 3, boxShadow: 3 }}>
          <CardContent>
            <FaFileAlt className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">AI Legal Document Generator</h2>
            <p className="text-gray-300 mt-2">Generate contracts, affidavits, and more.</p>
            <select className="w-full bg-gray-700 p-2 mt-2" value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
              <option value="contract">Contract</option>
              <option value="affidavit">Affidavit</option>
              <option value="petition">Petition</option>
            </select>
            <Button variant="contained" color="primary" className="mt-2" onClick={handleDocumentGeneration}>
              Generate
            </Button>
          </CardContent>
        </Card>

        {/* Legal Aid Eligibility Checker */}
        <Card sx={{ bgcolor: "gray.800", p: 3, boxShadow: 3 }}>
          <CardContent>
            <FaHandsHelping className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Legal Aid Eligibility Checker</h2>
            <p className="text-gray-300 mt-2">Check if you qualify for free legal aid.</p>
            <Button variant="contained" color="primary" className="mt-2" onClick={handleLegalAidCheck}>
              Check Now
            </Button>
          </CardContent>
        </Card>

        {/* Case Risk Assessment */}
        <Card sx={{ bgcolor: "gray.800", p: 3, boxShadow: 3 }}>
          <CardContent>
            <FaBalanceScale className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">AI-Powered Case Risk Assessment</h2>
            <p className="text-gray-300 mt-2">Get a success probability score for your case.</p>
            <Button variant="contained" color="primary" className="mt-2" onClick={handleCaseRiskAssessment}>
              Analyze
            </Button>
          </CardContent>
        </Card>

        {/* Legal Glossary */}
        <Card sx={{ bgcolor: "gray.800", p: 3, boxShadow: 3 }}>
          <CardContent>
            <FaBook className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Legal Glossary & Education Hub</h2>
            <p className="text-gray-300 mt-2">Learn about legal terms and rights.</p>
          </CardContent>
        </Card>

        {/* Multi-Language Support */}
        <Card sx={{ bgcolor: "gray.800", p: 3, boxShadow: 3 }}>
          <CardContent>
            <FaLanguage className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Multi-Language Support</h2>
            <p className="text-gray-300 mt-2">Access legal information in multiple languages.</p>
            <select className="w-full bg-gray-700 p-2 mt-2" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
            </select>
          </CardContent>
        </Card>

        {/* Emergency Legal Help */}
        <Card sx={{ bgcolor: "gray.800", p: 3, boxShadow: 3 }}>
          <CardContent>
            <FaExclamationTriangle className="text-red-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Emergency Legal Help</h2>
            <p className="text-gray-300 mt-2">Quickly connect with legal aid services.</p>
            <Button variant="contained" color="error" className="mt-2" onClick={handleEmergencyHelp}>
              Get Help
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
