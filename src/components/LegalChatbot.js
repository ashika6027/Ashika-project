import { useState } from "react";
import { Mic, Send, Sun, Moon } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDNtphWrCFa3EwsPglUWWqjkjxH8c1bfTM");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default function LegalChatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! How can I assist you with legal queries today?",
    },
  ]);
  const [darkMode, setDarkMode] = useState(true);

  const sendMessage = async () => {
    if (query.trim() === "") return;
    const userMessage = { type: "user", text: query };
    setMessages([
      ...messages,
      userMessage,
    ]);
    setQuery("");

    try {
      const prompt = `You are a legal assistant. Answer only legal-related queries. If the query is not legal-related, respond with 'I can only assist with legal matters.' Query: ${query}`;
      const result = await model.generateContent(prompt);
      const aiResponse =
        result.response.text() || "Sorry, I couldn't process your request.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: aiResponse },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: "Error fetching response. Please try again." },
      ]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#f3f3f3",
        color: darkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#66b2ff" }}>
          AI Legal Chatbot
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {darkMode ? (
            <Sun style={{ color: "#ffcc00" }} />
          ) : (
            <Moon style={{ color: "#555" }} />
          )}
        </button>
      </div>
      <div style={{ flexGrow: 1, padding: "16px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              borderRadius: "8px",
              width: "max-content",
              maxWidth: "50%",
              backgroundColor: msg.type === "user" ? "#007bff" : "#555",
              color: "white",
              margin: msg.type === "user" ? "8px 0 8px auto" : "8px auto 8px 0",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          display: "flex",
          gap: "8px",
          backgroundColor: darkMode ? "#222" : "#f9f9f9",
          padding: "12px",
          borderTop: "1px solid #ccc",
        }}
      >
        <input
          style={{
            flexGrow: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "white" : "black",
          }}
          placeholder="Ask a legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#007bff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={sendMessage}
        >
          <Send style={{ color: "white" }} />
        </button>
        <button
          style={{
            backgroundColor: "#555",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <Mic style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}