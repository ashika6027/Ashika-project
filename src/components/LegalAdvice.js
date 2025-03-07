import React, { useState } from "react";
import { FaMicrophone, FaBookmark, FaSync, FaFileAlt, FaCommentDots, FaBalanceScale, FaExclamationTriangle, FaGlobe, FaGraduationCap, FaShieldAlt, FaUserSecret } from "react-icons/fa";
import { Card } from "@mui/material";   // Ensure correct imports
import { Input } from "@mui/material";
import {Button} from "@mui/material";   // Use this path if LegalAdvice.js is inside src/components/


const LegalAdvice = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [savedQueries, setSavedQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse("AI-generated legal advice will appear here.");
      setLoading(false);
    }, 1500);
  };

  const handleVoiceQuery = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse("AI is processing your voice query...");
      setLoading(false);
    }, 1500);
  };

  const saveQuery = () => {
    if (query) setSavedQueries([...savedQueries, query]);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-blue-300 text-3xl font-bold text-center">AI-Powered Legal Assistance</h1>
      <p className="text-gray-300 text-center mt-2">Get AI-generated legal insights, document analysis, and more.</p>

      <div className="mt-6 flex justify-center gap-2">
        <Input
          className="w-1/2 bg-gray-800 text-white border border-gray-700"
          placeholder="Enter your legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="bg-blue-500 hover:scale-105" onClick={handleSearch}>
          {loading ? <FaSync className="animate-spin" /> : "Get Advice"}
        </Button>
        <Button className="bg-green-500 hover:scale-105" onClick={handleVoiceQuery}>
          <FaMicrophone />
        </Button>
        <Button className="bg-yellow-500 hover:scale-105" onClick={saveQuery}>
          <FaBookmark />
        </Button>
      </div>

      {response && <p className="text-blue-400 text-center mt-4">{response}</p>}

      <div className="mt-6">
        {savedQueries.length > 0 && (
          <div>
            <h2 className="text-white text-xl font-bold">Saved Queries</h2>
            <ul className="text-gray-300 mt-2">
              {savedQueries.map((q, index) => (
                <li key={index} className="bg-gray-800 p-2 rounded mt-1">{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaFileAlt className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Legal Document Generator</h2>
          <p className="text-gray-300 mt-2">Generate contracts, affidavits, and petitions automatically.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaCommentDots className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Live AI & Lawyer Chat</h2>
          <p className="text-gray-300 mt-2">AI chatbot and verified lawyers provide legal guidance.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaBalanceScale className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Case Law Recommendations</h2>
          <p className="text-gray-300 mt-2">Get AI-recommended relevant case laws and judgments.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaExclamationTriangle className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Risk Assessment</h2>
          <p className="text-gray-300 mt-2">AI predicts case success probability and risks.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaGlobe className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Multi-Language Support</h2>
          <p className="text-gray-300 mt-2">Access legal assistance in multiple languages.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaGraduationCap className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Legal Education Hub</h2>
          <p className="text-gray-300 mt-2">Learn legal terms, take quizzes, and watch educational videos.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaShieldAlt className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Data Encryption & Privacy</h2>
          <p className="text-gray-300 mt-2">Your legal queries and data are secured with encryption.</p>
        </Card>

        <Card className="bg-gray-800 p-6 shadow-lg hover:scale-105">
          <FaUserSecret className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-white text-xl font-bold">Anonymous Mode</h2>
          <p className="text-gray-300 mt-2">Ask legal questions without revealing your identity.</p>
        </Card>
      </div>
    </div>
  );
};

export default LegalAdvice;
