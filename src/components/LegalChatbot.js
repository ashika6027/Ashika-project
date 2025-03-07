import { useState } from "react";
import { Mic, Send, Sun, Moon, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

 function LegalChatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hello! How can I assist you with legal queries today?" },
  ]);
  const [darkMode, setDarkMode] = useState(true);

  const sendMessage = () => {
    if (query.trim() === "") return;
    setMessages([...messages, { type: "user", text: query }, { type: "ai", text: "Analyzing your query..." }]);
    setQuery("");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen p-6 transition-all`}>
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl font-bold text-blue-300">AI Legal Chatbot</h1>
        <div className="flex space-x-4">
          <Button onClick={() => setDarkMode(!darkMode)} variant="ghost">
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
          </Button>
        </div>
      </div>
      <Card className="max-w-3xl mx-auto shadow-lg bg-gray-800 p-4 rounded-2xl">
        <CardContent className="h-96 overflow-y-auto space-y-4 p-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${msg.type === "user" ? "bg-blue-500 ml-auto" : "bg-gray-700"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.text}
            </motion.div>
          ))}
        </CardContent>
      </Card>
      <div className="max-w-3xl mx-auto flex mt-4 space-x-2">
        <Input
          className="flex-grow focus:ring-blue-400 bg-gray-700 text-white border-none p-3 rounded-lg"
          placeholder="Ask a legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="bg-blue-500 hover:scale-105 p-3 rounded-lg" onClick={sendMessage}>
          <Send className="text-white" />
        </Button>
        <Button className="bg-gray-600 hover:scale-105 p-3 rounded-lg">
          <Mic className="text-white" />
        </Button>
      </div>
      <div className="max-w-3xl mx-auto flex justify-between mt-4">
        <Button className="bg-gray-700 p-2 rounded-lg">
          <BookOpen className="text-blue-400" /> Legal References
        </Button>
        <Button className="bg-gray-700 p-2 rounded-lg">Multilingual Support</Button>
      </div>
    </div>
  );
}

export default LegalChatbot;
