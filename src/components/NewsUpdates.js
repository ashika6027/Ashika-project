import React from "react";
import Button from "@mui/material/Button"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField"; 
import { Search } from "lucide-react"; 
import { motion } from "framer-motion";


const sections = [
  { title: "AI-Powered Legal Tutor", description: "Get AI-driven insights, case law explanations, and legal document summaries.", buttonText: "Learn More" },
  { title: "Legal Challenges & Simulations", description: "Participate in mock trials, legal debates, and AI-generated case challenges.", buttonText: "Explore" },
  { title: "Smart Legal Library", description: "Search legal books, comparative laws, and AI-generated case summaries.", buttonText: "Browse" },
  { title: "Community Q&A & Blogging", description: "Discuss legal issues, write blogs, and interact with legal professionals.", buttonText: "Join Now" },
  { title: "Certifications & Ranking", description: "Get recognized for your contributions and boost your legal career.", buttonText: "View Rankings" },
  { title: "Law Updates & Amendments", description: "Stay updated with the latest legal reforms and case law changes.", buttonText: "Read More" }
];

const LegalEducationPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen p-6 flex flex-col items-center">
      {/* Header Section */}
      <motion.header 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">Legal Education & Resources</h1>
        <p className="text-gray-300 mt-3 text-lg">Empower yourself with AI-driven legal research and immersive learning.</p>
      </motion.header>

      {/* Search Bar */}
      <motion.div 
        className="flex justify-center mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full max-w-xl">
          <TextField
            type="text"
            placeholder="Search legal topics, case laws, or books..."
            variant="outlined"
            fullWidth
            sx={{
              input: { color: "white", backgroundColor: "#1f2937", borderRadius: "24px", paddingLeft: "40px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "blue" },
                "&.Mui-focused fieldset": { borderColor: "blue" },
              }
            }}
          />
          <Search className="absolute left-4 top-3 text-gray-400" size={22} />
        </div>
      </motion.div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="relative overflow-hidden bg-gray-800 p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
              <CardContent>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">{section.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{section.description}</p>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ mt: 2, bgcolor: "blue", "&:hover": { bgcolor: "darkblue" } }}
                >
                  {section.buttonText}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LegalEducationPage; 