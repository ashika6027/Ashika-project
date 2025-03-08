import { useState } from "react";
import { Mic, Send, Sun, Moon, BookOpen } from "lucide-react";

export default function LegalChatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! How can I assist you with legal queries today?",
    },
  ]);
  const [darkMode, setDarkMode] = useState(true);

  const sendMessage = () => {
    if (query.trim() === "") return;
    setMessages([
      ...messages,
      { type: "user", text: query },
      { type: "ai", text: "Analyzing your query..." },
    ]);
    setQuery("");
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#f3f3f3",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        padding: "24px",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "16px",
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
      <div
        style={{
          flexGrow: 1,
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: darkMode ? "#333" : "#fff",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          overflowY: "auto",
        }}
      >
        <div style={{ maxHeight: "400px", overflowY: "auto", padding: "16px" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                borderRadius: "8px",
                maxWidth: "75%",
                backgroundColor: msg.type === "user" ? "#007bff" : "#555",
                color: "white",
                margin:
                  msg.type === "user" ? "8px 0 8px auto" : "8px auto 8px 0",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          gap: "8px",
          backgroundColor: darkMode ? "#222" : "#f9f9f9",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.1)",
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
