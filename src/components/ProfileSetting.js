import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { FaUser, FaLock, FaPalette, FaBell, FaGlobe } from "react-icons/fa";

export default function UserProfileSettings() {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "Enter your name");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "xyz@example.com");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "English");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.background =
      theme === "dark"
        ? "linear-gradient(to right, #141e30, #243b55)"
        : theme === "blue"
        ? "linear-gradient(to right, #003366, #00509E)"
        : "#ffffff";
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        background: theme === "dark"
          ? "linear-gradient(to right, #141e30, #243b55)"
          : theme === "blue"
          ? "linear-gradient(to right, #003366, #00509E)"
          : "#ffffff",
      }}
    >
      {/* Sidebar Navigation */}
      <div style={{ width: "25%", backgroundColor: "#2a3b4f", padding: "20px", borderRadius: "8px" }}>
        <Typography variant="h5" style={{ color: "#66b2ff", fontWeight: "bold", marginBottom: "20px" }}>
          Settings
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {["Profile", "Security", "Appearance", "Notifications", "Privacy"].map((item) => (
            <Typography
              key={item}
              style={{ cursor: "pointer", transition: "color 0.2s", color: "white" }}
              onMouseOver={(e) => (e.target.style.color = "#66b2ff")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              {item}
            </Typography>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ width: "75%", paddingLeft: "32px" }}>
        {[
          {
            icon: <FaUser size={30} color="#66b2ff" />,
            title: "Profile Information",
            content: (
              <>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ marginTop: "12px", backgroundColor: "#3b5268", borderRadius: "5px" }}
                  InputLabelProps={{ style: { color: "#66b2ff" } }}
                  InputProps={{ style: { color: "white" } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  InputProps={{ readOnly: true, style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#66b2ff" } }}
                  style={{ marginTop: "12px", backgroundColor: "#3b5268", borderRadius: "5px" }}
                />
                <Button variant="contained" style={{ marginTop: "16px", backgroundColor: "#66b2ff", color: "white" }}>
                  Save Changes
                </Button>
              </>
            ),
          },
          {
            icon: <FaLock size={30} color="#66b2ff" />,
            title: "Security",
            content: (
              <>
                <Button variant="contained" style={{ marginTop: "12px", backgroundColor: "#E53935", color: "white" }}>
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outlined" style={{ marginTop: "12px", color: "white", borderColor: "gray" }}>
                  Manage Sessions
                </Button>
              </>
            ),
          },
          {
            icon: <FaPalette size={30} color="#66b2ff" />,
            title: "Appearance",
            content: (
              <Select
                fullWidth
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                style={{ marginTop: "12px", backgroundColor: "#3b5268", color: "white" }}
              >
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
              </Select>
            ),
          },
          {
            icon: <FaBell size={30} color="#66b2ff" />,
            title: "Notifications",
            content: (
              <Button variant="contained" style={{ marginTop: "12px", backgroundColor: "#43A047", color: "white" }}>
                Enable Email Alerts
              </Button>
            ),
          },
          {
            icon: <FaGlobe size={30} color="#66b2ff" />,
            title: "Language",
            content: (
              <Select
                fullWidth
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ marginTop: "12px", backgroundColor: "#3b5268", color: "white" }}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            ),
          },
        ].map((section, index) => (
          <Card key={index} style={{ backgroundColor: "#2a3b4f", marginBottom: "20px", padding: "20px", borderRadius: "8px" }}>
            <CardContent>
              {section.icon}
              <Typography variant="h6" style={{ marginTop: "16px", color: "white" }}>{section.title}</Typography>
              {section.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}