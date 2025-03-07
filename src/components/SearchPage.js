import { useState } from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import { Search, Filter, Download, Bookmark, Share2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseLawSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cases, setCases] = useState([
    {
      title: "Landmark Privacy Case",
      court: "Supreme Court of India",
      date: "Jan 15, 2023",
      summary: "This case established the right to privacy as a fundamental right...",
      citation: "(2023) SC 1254",
    },
    {
      title: "Corporate Fraud Case",
      court: "Delhi High Court",
      date: "Feb 10, 2024",
      summary: "A major corporate fraud case involving misrepresentation of financial statements...",
      citation: "(2024) DHC 567",
    },
  ]);

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <h1 className="text-3xl text-blue-300 font-bold text-center mb-6">AI Case Law Search</h1>
      
      {/* Search Bar & Filters */}
      <div className="flex items-center gap-4 max-w-3xl mx-auto mb-6">
        <Input
          className="w-full bg-gray-800 text-white border border-gray-600 focus:ring-blue-400"
          placeholder="Search case laws..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button className="bg-blue-500 hover:scale-105">
          <Search className="w-5 h-5" />
        </Button>
        <Button className="bg-gray-700 hover:scale-105">
          <Filter className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Case List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((caseItem, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800 shadow-lg p-4">
              <CardContent>
                <h2 className="text-xl text-blue-400 font-semibold">{caseItem.title}</h2>
                <p className="text-gray-300">{caseItem.court} - {caseItem.date}</p>
                <p className="text-gray-400 mt-2">{caseItem.summary}</p>
                <p className="text-gray-500 mt-2 italic">Citation: {caseItem.citation}</p>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <Button variant="ghost" className="text-gray-400 hover:text-blue-300">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-blue-300">
                    <Download className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-blue-300">
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-blue-300">
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}