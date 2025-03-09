import { useState } from "react";
import { Card, CardContent } from "@mui/material";  
import { FaBell, FaCalendarAlt, FaFileAlt, FaEnvelope, FaGavel } from "react-icons/fa";

export default function CaseTrackingNotifications() {
  const [caseUpdates, setCaseUpdates] = useState([
    { stage: "Case Filed", date: "2024-02-15", status: "Completed" },
    { stage: "First Hearing", date: "2024-03-01", status: "Pending" },
    { stage: "Evidence Submission", date: "2024-04-10", status: "Upcoming" },
    { stage: "Final Verdict", date: "2024-06-20", status: "Upcoming" },
  ]);
  
  return (
    <div style={{ 
      background: "linear-gradient(to right, #141e30, #243b55)", 
      minHeight: "100vh", 
      color: "white", 
      padding: "24px" 
    }}>
      <h1 style={{ color: "#66b2ff", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
        Case Tracking & Notifications
      </h1>
      <p style={{ color: "#D1D5DB", textAlign: "center", marginTop: "8px" }}>
        Track your case progress in real-time and stay updated.
      </p>
      
      {/* Case Progress Timeline */}
      <div style={{ marginTop: "32px", marginLeft: "auto", marginRight: "auto", maxWidth: "600px" }}>
        {caseUpdates.map((update, index) => (
          <Card 
            key={index} 
            style={{ 
              backgroundColor: "#2a3b4f", 
              color: "white", 
              marginBottom: "16px", 
              padding: "16px", 
              boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" 
            }}>
            <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2>{update.stage}</h2>
                <p style={{ color: "#D1D5DB" }}>Scheduled Date: {update.date}</p>
              </div>
              <span style={{ 
                padding: "6px 12px", 
                borderRadius: "16px", 
                fontSize: "14px", 
                backgroundColor: update.status === "Completed" ? "#34D399" 
                  : update.status === "Pending" ? "#FBBF24" 
                  : "#3B82F6" 
              }}>
                {update.status}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Features */}
      <div style={{ 
        marginTop: "40px", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "16px" 
      }}>
        {[
          { icon: <FaCalendarAlt size={40} color="#66b2ff" />, title: "Case Calendar", desc: "View your scheduled hearings & deadlines.", action: () => alert("View upcoming hearings in your calendar.") },
          { icon: <FaFileAlt size={40} color="#66b2ff" />, title: "Document Repository", desc: "Access all case-related files.", action: () => alert("Manage and view case documents.") },
          { icon: <FaBell size={40} color="#66b2ff" />, title: "Smart Notifications", desc: "Get reminders for hearings & updates.", action: () => alert("Receive alerts for case updates.") },
          { icon: <FaEnvelope size={40} color="#66b2ff" />, title: "Lawyer Communication", desc: "Message your lawyer or court authorities.", action: () => alert("Directly communicate with your lawyer.") },
          { icon: <FaGavel size={40} color="#66b2ff" />, title: "AI Legal Reminders", desc: "Never miss an important date.", action: () => alert("AI-generated legal reminders for deadlines.") }
        ].map((feature, index) => (
          <Card 
            key={index} 
            style={{ 
              backgroundColor: "#3b5268", 
              padding: "24px", 
              boxShadow: "2px 2px 10px rgba(0,0,0,0.3)", 
              cursor: "pointer", 
              transition: "transform 0.3s" 
            }} 
            onClick={feature.action}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <CardContent>
              <div style={{ marginBottom: "12px" }}>{feature.icon}</div>
              <h2 style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{feature.title}</h2>
              <p style={{ color: "#D1D5DB", marginTop: "8px" }}>{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
