import { useState } from "react";
import { Button, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Scale, FileText, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Ensure correct usage of React Router's Link

export default function LitigantDashboard() {
  const [cases, setCases] = useState([
    { id: 1, title: "Smith vs. Jones", status: "In Progress", hearing: "March 10, 2025" },
    { id: 2, title: "State vs. Doe", status: "Awaiting Hearing", hearing: "March 15, 2025" },
  ]);

  return (
    <div style={{ backgroundColor: "#141e30", minHeight: "100vh", color: "white", padding: "32px" }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#4db8ff", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <Scale size={40} /> Litigant Dashboard
        </h1>
        <p style={{ color: "#b0bec5", marginTop: "8px" }}>Track your legal cases and stay updated.</p>
      </motion.div>

      {/* Case Tracking */}
      <div style={{ marginTop: "40px", backgroundColor: "#1e2a38", padding: "24px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#4db8ff", marginBottom: "16px" }}>Your Cases</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Case Title</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Status</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Next Hearing</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#4db8ff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((caseItem) => (
              <TableRow key={caseItem.id} style={{ backgroundColor: "#22303f" }}>
                <TableCell style={{ color: "#b0bec5" }}>{caseItem.title}</TableCell>
                <TableCell style={{ color: caseItem.status === "In Progress" ? "#ffcc00" : "#ff4444" }}>
                  {caseItem.status}
                </TableCell>
                <TableCell style={{ color: "#b0bec5" }}>{caseItem.hearing}</TableCell>
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
          { icon: <FileText size={40} style={{ color: "#4db8ff" }} />, title: "Legal Documents" },
          { icon: <MessageCircle size={40} style={{ color: "#4db8ff" }} />, title: "Consult Lawyer" },
          { icon: <Clock size={40} style={{ color: "#4db8ff" }} />, title: "Hearing Schedule" },
        ].map((tool, index) => (
          <Card key={index} style={{ padding: "16px", cursor: "pointer", backgroundColor: "#1e2a38", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
            <CardContent>
              {tool.icon}
              <p style={{ marginTop: "8px", fontWeight: "bold", color: "#b0bec5" }}>{tool.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}