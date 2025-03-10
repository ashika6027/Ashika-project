import React, { useState, useEffect } from "react";

const ChatBox = ({ lawyer, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Simulate fetching previous messages (Replace with real backend logic)
  useEffect(() => {
    setMessages([
      { sender: "lawyer", text: `Hello, how can I assist you?` },
    ]);
  }, [lawyer]);

  // Handle sending messages
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "client", text: input }]);
      setInput("");
    }
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "300px",
      backgroundColor: "#2a3b4f",
      borderRadius: "10px",
      padding: "15px",
      color: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)"
    }}>
      <h4>Chat with {lawyer.name}</h4>
      <div style={{ height: "200px", overflowY: "auto", padding: "10px", backgroundColor: "#3b5268", borderRadius: "5px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{
            textAlign: msg.sender === "client" ? "right" : "left",
            color: msg.sender === "client" ? "#00d1ff" : "#ffcc00"
          }}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "10px",
          borderRadius: "5px",
          border: "none"
        }}
      />
      <button onClick={sendMessage} style={{
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%"
      }}>
        Send
      </button>
      <button onClick={onClose} style={{
        marginTop: "5px",
        padding: "5px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%"
      }}>
        Close Chat
      </button>
    </div>
  );
};

export default ChatBox;
