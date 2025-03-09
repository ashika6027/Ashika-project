import React from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import { Search } from "lucide-react";

const CommunityForum = () => {
  return (
    <div style={{ 
      background: "linear-gradient(to right, #141e30, #243b55)", 
      color: "white", 
      minHeight: "100vh", 
      padding: "24px"
    }}>
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#4db8ff" }}>Community Forum & Discussion</h1>
        <p style={{ color: "#d1d5db", marginTop: "8px" }}>Engage in legal discussions, ask questions, and collaborate with professionals.</p>
      </header>

      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
          <Input
            type="text"
            placeholder="Search discussions..."
            style={{
              backgroundColor: "#2a3b55",
              color: "white",
              padding: "12px 16px",
              borderRadius: "8px",
              width: "100%",
              paddingLeft: "40px",
              border: "1px solid #4db8ff",
            }}
          />
          <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#4db8ff" }} size={20} />
        </div>
      </div>

      {/* Discussion Sections */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {[
          { title: "Start a Discussion", desc: "Post your legal queries and get insights from the community.", btn: "Create Post" },
          { title: "Trending Discussions", desc: "Explore the most talked-about legal topics.", btn: "View Trends" },
          { title: "Live Legal Q&A", desc: "Join real-time discussions with legal experts.", btn: "Join Now" },
          { title: "Browse Categories", desc: "Filter discussions by legal topics like Civil Law, Criminal Law, etc.", btn: "Explore" },
          { title: "Top Contributors", desc: "See the most active and knowledgeable community members.", btn: "View Rankings" },
          { title: "Legal Blogs & Insights", desc: "Read articles and expert opinions on recent legal developments.", btn: "Read More" },
        ].map((section, index) => (
          <Card key={index} style={{ 
            backgroundColor: "#2a3b55", 
            padding: "20px", 
            borderRadius: "12px", 
            transition: "transform 0.3s", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <CardContent>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#4db8ff" }}>{section.title}</h2>
              <p style={{ color: "#d1d5db", marginTop: "8px" }}>{section.desc}</p>
              <Button 
                style={{ 
                  marginTop: "16px", 
                  backgroundColor: "#4db8ff", 
                  color: "white", 
                  width: "100%", 
                  padding: "10px",
                  borderRadius: "8px",
                  fontWeight: "bold"
                }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#3892cc"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4db8ff"}
              >
                {section.btn}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
