import { useState } from "react";
import { Button, Card, CardContent, Input, Typography } from "@mui/material";
import { FaVideo, FaMicrophone, FaFileUpload, FaComments, FaUserShield } from "react-icons/fa";

export default function LiveVirtualCourt() {
  const [isLive, setIsLive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [documents, setDocuments] = useState([]);

  const startSession = () => setIsLive(true);
  const stopSession = () => setIsLive(false);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  const uploadDocument = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments([...documents, file.name]);
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(to right, #141e30, #243b55)", 
      color: "white", 
      padding: "20px" 
    }}>
      <Typography variant="h4" align="center" style={{ color: "#4db8ff", fontWeight: "bold" }}>
        Live Virtual Court Session
      </Typography>
      <Typography variant="body1" align="center" style={{ color: "#b0c4de", marginTop: "10px" }}>
        Participate in live virtual hearings with AI-powered features.
      </Typography>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {!isLive ? (
          <Button 
            variant="contained" 
            style={{ backgroundColor: "#007BFF", color: "white", fontWeight: "bold" }}
            onClick={startSession}
          >
            Start Live Session
          </Button>
        ) : (
          <Button 
            variant="contained" 
            style={{ backgroundColor: "#444", color: "white", fontWeight: "bold" }}
            onClick={stopSession}
          >
            End Session
          </Button>
        )}
      </div>

      {isLive && (
        <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          <Card style={{ backgroundColor: "#2a3b4f", padding: "20px", textAlign: "center" }}>
            <FaVideo size={40} style={{ color: "#4db8ff" }} />
            <Typography variant="h6" style={{ color: "#ffffff", marginTop: "10px" }}>Live Video</Typography>
            <Typography variant="body2" style={{ color: "#d3d3d3", marginTop: "5px" }}>
              Real-time courtroom session with secure video conferencing.
            </Typography>
          </Card>

          <Card style={{ backgroundColor: "#2a3b4f", padding: "20px", textAlign: "center" }}>
            <FaMicrophone size={40} style={{ color: "#4db8ff" }} />
            <Typography variant="h6" style={{ color: "#ffffff", marginTop: "10px" }}>Automated Transcription</Typography>
            <Typography variant="body2" style={{ color: "#d3d3d3", marginTop: "5px" }}>
              AI-generated transcripts of the court proceedings.
            </Typography>
          </Card>

          <Card style={{ backgroundColor: "#2a3b4f", padding: "20px", textAlign: "center" }}>
            <FaComments size={40} style={{ color: "#4db8ff" }} />
            <Typography variant="h6" style={{ color: "#ffffff", marginTop: "10px" }}>Live Chat & Notes</Typography>
            <Typography variant="body2" style={{ color: "#d3d3d3", marginTop: "5px" }}>
              Chat with lawyers, judges, and litigants in real time.
            </Typography>

            <div style={{ marginTop: "10px" }}>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ backgroundColor: "#3b4f66", color: "white", padding: "10px", borderRadius: "5px", width: "100%" }}
              />
              <Button 
                variant="contained" 
                style={{ marginTop: "10px", backgroundColor: "#007BFF", color: "white" }}
                onClick={sendMessage}
              >
                Send
              </Button>
            </div>

            <div style={{ marginTop: "10px", color: "#b0c4de" }}>
              {messages.map((msg, index) => (
                <Typography key={index} variant="body2">- {msg}</Typography>
              ))}
            </div>
          </Card>
        </div>
      )}

      {isLive && (
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", gap: "20px" }}>
          <Card style={{ backgroundColor: "#2a3b4f", padding: "20px", textAlign: "center", flex: 1 }}>
            <FaFileUpload size={40} style={{ color: "#4db8ff" }} />
            <Typography variant="h6" style={{ color: "#ffffff", marginTop: "10px" }}>Upload Case Documents</Typography>
            <Typography variant="body2" style={{ color: "#d3d3d3", marginTop: "5px" }}>
              Submit legal documents for review.
            </Typography>
            <input 
              type="file" 
              style={{ marginTop: "10px", backgroundColor: "#4db8ff", padding: "5px", borderRadius: "5px" }} 
              onChange={uploadDocument} 
            />
            <div style={{ marginTop: "10px", color: "#b0c4de" }}>
              {documents.map((doc, index) => (
                <Typography key={index} variant="body2">📄 {doc}</Typography>
              ))}
            </div>
          </Card>

          <Card style={{ backgroundColor: "#2a3b4f", padding: "20px", textAlign: "center", flex: 1 }}>
            <FaUserShield size={40} style={{ color: "#4db8ff" }} />
            <Typography variant="h6" style={{ color: "#ffffff", marginTop: "10px" }}>Secure & Encrypted</Typography>
            <Typography variant="body2" style={{ color: "#d3d3d3", marginTop: "5px" }}>
              All court proceedings are encrypted for privacy.
            </Typography>
          </Card>
        </div>
      )}
    </div>
  );
}
