import { useState } from "react";
import { Card, CardContent } from "@mui/material";  // Removed unused imports
import { FaBell, FaCalendarAlt, FaFileAlt, FaEnvelope, FaGavel } from "react-icons/fa";

export default function CaseTrackingNotifications() {
  const [caseUpdates, setCaseUpdates] = useState([
    { stage: "Case Filed", date: "2024-02-15", status: "Completed" },
    { stage: "First Hearing", date: "2024-03-01", status: "Pending" },
    { stage: "Evidence Submission", date: "2024-04-10", status: "Upcoming" },
    { stage: "Final Verdict", date: "2024-06-20", status: "Upcoming" },
  ]);
  
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-blue-300 text-3xl font-bold text-center">Case Tracking & Notifications</h1>
      <p className="text-gray-300 text-center mt-2">Track your case progress in real-time and stay updated.</p>
      
      {/* Case Progress Timeline */}
      <div className="mt-8 mx-auto max-w-3xl">
        {caseUpdates.map((update, index) => (
          <Card key={index} sx={{ backgroundColor: "rgb(31, 41, 55)", color: "white", marginBottom: "16px", padding: "16px", boxShadow: "lg" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2>{update.stage}</h2>
                <p className="text-gray-300">Scheduled Date: {update.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${update.status === "Completed" ? "bg-green-500" : update.status === "Pending" ? "bg-yellow-500" : "bg-blue-500"}`}>
                {update.status}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Features */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card sx={{ backgroundColor: "rgb(31, 41, 55)", padding: "24px", boxShadow: "lg", cursor: "pointer", "&:hover": { transform: "scale(1.05)" } }} onClick={() => alert("View upcoming hearings in your calendar.") }>
          <CardContent>
            <FaCalendarAlt className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Case Calendar</h2>
            <p className="text-gray-300 mt-2">View your scheduled hearings & deadlines.</p>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "rgb(31, 41, 55)", padding: "24px", boxShadow: "lg", cursor: "pointer", "&:hover": { transform: "scale(1.05)" } }} onClick={() => alert("Manage and view case documents.") }>
          <CardContent>
            <FaFileAlt className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Document Repository</h2>
            <p className="text-gray-300 mt-2">Access all case-related files.</p>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "rgb(31, 41, 55)", padding: "24px", boxShadow: "lg", cursor: "pointer", "&:hover": { transform: "scale(1.05)" } }} onClick={() => alert("Receive alerts for case updates.") }>
          <CardContent>
            <FaBell className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Smart Notifications</h2>
            <p className="text-gray-300 mt-2">Get reminders for hearings & updates.</p>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "rgb(31, 41, 55)", padding: "24px", boxShadow: "lg", cursor: "pointer", "&:hover": { transform: "scale(1.05)" } }} onClick={() => alert("Directly communicate with your lawyer.") }>
          <CardContent>
            <FaEnvelope className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">Lawyer Communication</h2>
            <p className="text-gray-300 mt-2">Message your lawyer or court authorities.</p>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "rgb(31, 41, 55)", padding: "24px", boxShadow: "lg", cursor: "pointer", "&:hover": { transform: "scale(1.05)" } }} onClick={() => alert("AI-generated legal reminders for deadlines.") }>
          <CardContent>
            <FaGavel className="text-blue-400 text-4xl mb-4" />
            <h2 className="text-white text-xl font-bold">AI Legal Reminders</h2>
            <p className="text-gray-300 mt-2">Never miss an important date.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
