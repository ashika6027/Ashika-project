import { useState } from "react";
import { Card, CardContent, Typography, Button, TextField, MenuItem, Select, Box } from "@mui/material";
import { FaUser, FaLock, FaPalette, FaBell, FaGlobe } from "react-icons/fa";

export default function UserProfileSettings() {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", color: "white", display: "flex", p: 3 }}>
      {/* Sidebar Navigation */}
      <Box sx={{ width: "25%", bgcolor: "#2D2D2D", p: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ color: "#90CAF9", fontWeight: "bold", mb: 3 }}>
          Settings
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#64B5F6" } }}>Profile</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#64B5F6" } }}>Security</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#64B5F6" } }}>Appearance</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#64B5F6" } }}>Notifications</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#64B5F6" } }}>Privacy</Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: "75%", pl: 4 }}>
        {/* Profile Section */}
        <Card sx={{ bgcolor: "#424242", mb: 3, p: 3 }}>
          <CardContent>
            <FaUser size={30} color="#90CAF9" />
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>Profile Information</Typography>
            <TextField fullWidth variant="outlined" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} sx={{ mt: 2, bgcolor: "#333", borderRadius: 1, input: { color: "white" } }} />
            <TextField fullWidth variant="outlined" label="Email" value={email} InputProps={{ readOnly: true }} sx={{ mt: 2, bgcolor: "#333", borderRadius: 1, input: { color: "white" } }} />
            <Button variant="contained" sx={{ mt: 3, bgcolor: "#2196F3", ":hover": { bgcolor: "#1976D2" } }}>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Security Section */}
        <Card sx={{ bgcolor: "#424242", mb: 3, p: 3 }}>
          <CardContent>
            <FaLock size={30} color="#90CAF9" />
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>Security</Typography>
            <Button variant="contained" sx={{ mt: 2, bgcolor: "#E53935", ":hover": { bgcolor: "#D32F2F" } }}>Enable Two-Factor Authentication</Button>
            <Button variant="outlined" sx={{ mt: 2, color: "white", borderColor: "gray", ":hover": { borderColor: "white" } }}>Manage Sessions</Button>
          </CardContent>
        </Card>

        {/* Appearance Section */}
        <Card sx={{ bgcolor: "#424242", mb: 3, p: 3 }}>
          <CardContent>
            <FaPalette size={30} color="#90CAF9" />
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>Appearance</Typography>
            <Select fullWidth value={theme} onChange={(e) => setTheme(e.target.value)} sx={{ mt: 2, bgcolor: "#333", color: "white" }}>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
            </Select>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card sx={{ bgcolor: "#424242", mb: 3, p: 3 }}>
          <CardContent>
            <FaBell size={30} color="#90CAF9" />
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>Notifications</Typography>
            <Button variant="contained" sx={{ mt: 2, bgcolor: "#43A047", ":hover": { bgcolor: "#388E3C" } }}>Enable Email Alerts</Button>
          </CardContent>
        </Card>

        {/* Language Section */}
        <Card sx={{ bgcolor: "#424242", p: 3 }}>
          <CardContent>
            <FaGlobe size={30} color="#90CAF9" />
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>Language</Typography>
            <Select fullWidth value={language} onChange={(e) => setLanguage(e.target.value)} sx={{ mt: 2, bgcolor: "#333", color: "white" }}>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
