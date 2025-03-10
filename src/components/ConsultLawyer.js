import React, { useState } from "react";
import ChatBox from "./LawyerChat"; // Import ChatBox Component

const lawyers = [
  {
    id: 1,
    name: "Rajendra Law Office LLP",
    location: "Chennai, India",
    expertise: "Civil, Criminal, Family, Corporate Law",
    experience: "25+ years",
  },
  {
    id: 2,
    name: "Vijay Lawyer Firm",
    location: "Chennai, India",
    expertise: "Family Law, Civil Law, Criminal Law",
    experience: "12+ years",
  },
  {
    name: "Chennai Law Forum",
    location: "Chennai, India",
    expertise: "Corporate Law, Criminal Defense, Family Disputes",
    experience: "20+ years",
    website: "https://www.chennailawforum.com",
  },
  {
    name: "Aran Law Firm",
    location: "Chennai, India",
    expertise: "Banking, Debt Recovery, Real Estate, IP Law",
    experience: "Full-Service Firm",
    website: "https://www.aranlawfirm.com",
  },
];

const ConsultLawyer = () => {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  return (
    <div style={{ padding: "20px", backgroundColor: "#141e30", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Consult a Lawyer</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} style={{ backgroundColor: "#2a3b4f", padding: "15px", borderRadius: "10px" }}>
            <h3>{lawyer.name}</h3>
            <p><strong>Location:</strong> {lawyer.location}</p>
            <p><strong>Expertise:</strong> {lawyer.expertise}</p>
            <p><strong>Experience:</strong> {lawyer.experience}</p>
            
            <button 
              onClick={() => setSelectedLawyer(lawyer)}
              style={{
                padding: "10px 15px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px"
              }}>
              Chat with Lawyer
            </button>
          </div>
        ))}
      </div>

      {selectedLawyer && <ChatBox lawyer={selectedLawyer} onClose={() => setSelectedLawyer(null)} />}
    </div>
  );
};

export default ConsultLawyer;
