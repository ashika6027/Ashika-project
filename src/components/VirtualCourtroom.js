import { useEffect, useRef, useState } from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import { FaVideo, FaMicrophone, FaFileUpload, FaComments, FaUserShield } from "react-icons/fa";

export default function LiveVirtualCourt() {
  const [isLive, setIsLive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [documents, setDocuments] = useState([]);
  const [isHovered, setIsHovered] = useState(false);  // State to track hover effect
  const jitsiContainerRef = useRef(null);
  let jitsiApi = null;

  useEffect(() => {
    const loadJitsiScript = () => {
      if (!document.getElementById("jitsi-script")) {
        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.id = "jitsi-script";
        document.body.appendChild(script);
        script.onload = () => console.log("Jitsi API loaded");
      }
    };

    loadJitsiScript();
  }, []);

  const startSession = () => {
    setIsLive(true);
    setTimeout(initializeJitsi, 500);
  };

  const stopSession = () => {
    setIsLive(false);
    if (jitsiApi) jitsiApi.dispose();
  };

  const initializeJitsi = () => {
    if (!window.JitsiMeetExternalAPI) {
      console.error("Jitsi Meet API script not loaded");
      return;
    }

    jitsiApi = new window.JitsiMeetExternalAPI("meet.jit.si", {
      roomName: "LiveVirtualCourtSession",
      parentNode: jitsiContainerRef.current,
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
      },
      configOverwrite: {
        prejoinPageEnabled: false,
      },
      userInfo: {
        displayName: "Court Participant",
      },
    });
  };

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

  const containerStyle = {
    backgroundColor: "#1a1a1a",
    minHeight: "100vh",
    padding: "24px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    color: "#4fc3f7",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const subHeaderStyle = {
    color: "#e0e0e0",
    textAlign: "center",
    marginTop: "8px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#e57373",
    borderRadius: "8px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    transition: "transform 0.2s",
    transform: isHovered ? "scale(1.05)" : "scale(1)", // Using hover state for button effect
  };

  const jitsiContainerStyle = {
    height: "500px",
    backgroundColor: "#424242",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    marginTop: "24px",
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "24px",
    marginTop: "32px",
  };

  const cardStyle = {
    backgroundColor: "#424242",
    padding: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
  };

  const cardTitleStyle = {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const cardTextStyle = {
    color: "#e0e0e0",
    marginTop: "8px",
  };

  const inputStyle = {
    backgroundColor: "#616161",
    color: "white",
    border: "1px solid #757575",
    padding: "8px",
    width: "100%",
    borderRadius: "4px",
  };

  const sendButtonStyle = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "8px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Live Virtual Court Session</h1>
      <p style={subHeaderStyle}>Participate in live virtual hearings with AI-powered features.</p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
        {!isLive ? (
          <button
            style={buttonStyle}
            onClick={startSession}
            onMouseEnter={() => setIsHovered(true)}  // Set hover state
            onMouseLeave={() => setIsHovered(false)}  // Reset hover state
          >
            Start Live Session
          </button>
        ) : (
          <button
            style={{ ...buttonStyle, backgroundColor: "#757575" }}
            onClick={stopSession}
            onMouseEnter={() => setIsHovered(true)}  // Set hover state
            onMouseLeave={() => setIsHovered(false)}  // Reset hover state
          >
            End Session
          </button>
        )}
      </div>

      {isLive && (
        <div style={{ marginTop: "32px" }}>
          <div ref={jitsiContainerRef} style={jitsiContainerStyle}></div>

          <div style={cardContainerStyle}>
            <Card style={cardStyle}>
              <FaMicrophone style={{ color: "#4fc3f7", fontSize: "32px", marginBottom: "16px" }} />
              <h2 style={cardTitleStyle}>Automated Transcription</h2>
              <p style={cardTextStyle}>AI-generated transcripts of the court proceedings.</p>
            </Card>

            <Card style={cardStyle}>
              <FaComments style={{ color: "#4fc3f7", fontSize: "32px", marginBottom: "16px" }} />
              <h2 style={cardTitleStyle}>Live Chat & Notes</h2>
              <p style={cardTextStyle}>Chat with lawyers, judges, and litigants in real time.</p>
              <div style={{ marginTop: "16px" }}>
                <Input
                  style={inputStyle}
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button style={sendButtonStyle} onClick={sendMessage}>
                  Send
                </button>
              </div>
              <div style={{ marginTop: "8px", color: "#e0e0e0" }}>
                {messages.map((msg, index) => (
                  <p key={index}>- {msg}</p>
                ))}
              </div>
            </Card>
          </div>

          <div style={{ marginTop: "32px", display: "flex", gap: "24px", flexDirection: "column" }}>
            <Card style={cardStyle}>
              <FaFileUpload style={{ color: "#4fc3f7", fontSize: "32px", marginBottom: "16px" }} />
              <h2 style={cardTitleStyle}>Upload Case Documents</h2>
              <p style={cardTextStyle}>Submit legal documents for review.</p>
              <input
                type="file"
                style={{
                  marginTop: "8px",
                  padding: "8px",
                  backgroundColor: "#616161",
                  border: "none",
                  color: "white",
                }}
                onChange={uploadDocument}
              />
              <div style={{ marginTop: "8px", color: "#e0e0e0" }}>
                {documents.map((doc, index) => (
                  <p key={index}>📄 {doc}</p>
                ))}
              </div>
            </Card>

            <Card style={cardStyle}>
              <FaUserShield style={{ color: "#4fc3f7", fontSize: "32px", marginBottom: "16px" }} />
              <h2 style={cardTitleStyle}>Secure & Encrypted</h2>
              <p style={cardTextStyle}>All court proceedings are encrypted for privacy.</p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}