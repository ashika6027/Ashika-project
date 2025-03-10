import { useState } from "react";
import { Button, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Briefcase, BookOpen, MessageSquare, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Ensure correct usage of React Router's Link

export default function LawyerDashboard() {
  const [cases, setCases] = useState([
    { id: 1, title: "Case 201: Doe vs. Roe", status: "Active", client: "John Doe" },
    { id: 2, title: "Case 202: State vs. Black", status: "Pending", client: "Jane Black" },
    { id: 3, title: "Case 203: Green vs. White", status: "Closed", client: "Mark Green" },
  ]);

  return (
    <div style={{ backgroundColor: "#141e30", minHeight: "100vh", color: "white", padding: "32px" }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#4db8ff", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <Briefcase size={40} /> Lawyer Dashboard
        </h1>
        <p style={{ color: "#b0bec5", marginTop: "8px" }}>Manage legal proceedings and client interactions seamlessly.</p>
      </motion.div>

      {/* Case Management */}
      <div style={{ marginTop: "40px", backgroundColor: "#1e2a38", padding: "24px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#4db8ff", marginBottom: "16px" }}>Your Cases</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Case Title</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Status</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Client</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((caseItem) => (
              <TableRow key={caseItem.id} style={{ backgroundColor: "#22303f" }}>
                <TableCell style={{ color: "#b0bec5" }}>{caseItem.title}</TableCell>
                <TableCell style={{ color: caseItem.status === "Active" ? "#ffcc00" : caseItem.status === "Pending" ? "#ff4444" : "#00c851" }}>
                  {caseItem.status}
                </TableCell>
                <TableCell style={{ color: "#b0bec5" }}>{caseItem.client}</TableCell>
                <TableCell>
                  <Link to={`/case-details/${caseItem.id}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" style={{ backgroundColor: "#007bff", color: "white" }}>View Details</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Tools & Resources */}
      <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
        {[ 
          { icon: <BookOpen size={40} style={{ color: "#4db8ff" }} />, title: "Case Law Search", link: "/search" },
          { icon: <MessageSquare size={40} style={{ color: "#4db8ff" }} />, title: "AI Legal Chatbot", link: "/chatbot" },
          { icon: <Users size={40} style={{ color: "#4db8ff" }} />, title: "Client Interactions" },
          { icon: <Globe size={40} style={{ color: "#4db8ff" }} />, title: "Virtual Courtroom", link: "/courtroom" },
        ].map((tool, index) => (
          <Card key={index} style={{ padding: "16px", cursor: "pointer", backgroundColor: "#1e2a38", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
            <CardContent>
              {tool.icon}
              {tool.link ? (
                <Link to={tool.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <p style={{ marginTop: "8px", fontWeight: "bold", color: "#b0bec5" }}>{tool.title}</p>
                </Link>
              ) : (
                <p style={{ marginTop: "8px", fontWeight: "bold", color: "#b0bec5" }}>{tool.title}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
