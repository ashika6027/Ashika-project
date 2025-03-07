import { useState } from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
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
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-blue-300 text-3xl font-bold text-center">Live Virtual Court Session</h1>
      <p className="text-gray-300 text-center mt-2">Participate in live virtual hearings with AI-powered features.</p>
      
      <div className="flex justify-center mt-6">
        {!isLive ? (
          <Button className="bg-red-500 hover:scale-105" onClick={startSession}>
            Start Live Session
          </Button>
        ) : (
          <Button className="bg-gray-700 hover:scale-105" onClick={stopSession}>
            End Session
          </Button>
        )}
      </div>
      
      {isLive && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 p-4 shadow-lg">
            <FaVideo className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Live Video</h2>
            <p className="text-gray-300 mt-2">Real-time courtroom session with secure video conferencing.</p>
          </Card>

          <Card className="bg-gray-800 p-4 shadow-lg">
            <FaMicrophone className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Automated Transcription</h2>
            <p className="text-gray-300 mt-2">AI-generated transcripts of the court proceedings.</p>
          </Card>

          <Card className="bg-gray-800 p-4 shadow-lg">
            <FaComments className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Live Chat & Notes</h2>
            <p className="text-gray-300 mt-2">Chat with lawyers, judges, and litigants in real time.</p>
            <div className="mt-4">
              <Input
                className="bg-gray-700 text-white border border-gray-600"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="mt-2 bg-blue-500 hover:scale-105" onClick={sendMessage}>Send</Button>
            </div>
            <div className="mt-2 text-gray-300">
              {messages.map((msg, index) => (
                <p key={index}>- {msg}</p>
              ))}
            </div>
          </Card>
        </div>
      )}
      
      {isLive && (
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <Card className="bg-gray-800 p-4 shadow-lg w-full md:w-1/2">
            <FaFileUpload className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Upload Case Documents</h2>
            <p className="text-gray-300 mt-2">Submit legal documents for review.</p>
            <input type="file" className="mt-2" onChange={uploadDocument} />
            <div className="mt-2 text-gray-300">
              {documents.map((doc, index) => (
                <p key={index}>📄 {doc}</p>
              ))}
            </div>
          </Card>

          <Card className="bg-gray-800 p-4 shadow-lg w-full md:w-1/2">
            <FaUserShield className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Secure & Encrypted</h2>
            <p className="text-gray-300 mt-2">All court proceedings are encrypted for privacy.</p>
          </Card>
        </div>
      )}
    </div>
  );
}