import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) return; // Ensure role is selected before proceeding

    if (role === "Judge") navigate("/judge-dashboard");
    else if (role === "Lawyer") navigate("/lawyer-dashboard");
    else if (role === "Law Student") navigate("/student-dashboard");
    else if (role === "Litigants") navigate("/litigant-dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #141e30, #243b55)",
        color: "white",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "400px", padding: "16px" }}
      >
        <Card
          style={{
            backgroundColor: "#1E1E1E",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              style={{ color: "#4db8ff", fontWeight: "bold", marginBottom: "12px" }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Typography>

            <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  style={{ backgroundColor: "#2a3b4f", borderRadius: "5px" }}
                  InputProps={{ style: { color: "white" } }}
                />
              )}
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                style={{ backgroundColor: "#2a3b4f", borderRadius: "5px" }}
                InputProps={{ style: { color: "white" } }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                style={{ backgroundColor: "#2a3b4f", borderRadius: "5px" }}
                InputProps={{ style: { color: "white" } }}
              />
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  style={{ backgroundColor: "#2a3b4f", borderRadius: "5px" }}
                  InputProps={{ style: { color: "white" } }}
                />
              )}
              {!isLogin && (
                <FormControl fullWidth style={{ backgroundColor: "#2a3b4f", borderRadius: "5px" }}>
                  <InputLabel style={{ color: "white" }}>Role</InputLabel>
                  <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    variant="outlined"
                    style={{ color: "white" }}
                  >
                    <MenuItem value="Judge">Judge</MenuItem>
                    <MenuItem value="Lawyer">Lawyer</MenuItem>
                    <MenuItem value="Law Student">Law Student</MenuItem>
                    <MenuItem value="Litigants">Litigants</MenuItem>
                  </Select>
                </FormControl>
              )}
              {isLogin && (
                <Typography
                  align="right"
                  style={{
                    color: "#4db8ff",
                    fontSize: "14px",
                    marginTop: "8px",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </Typography>
              )}
              <Button
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  fontWeight: "bold",
                  padding: "8px",
                  borderRadius: "5px",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                onClick={handleLogin} // Call handleLogin on button click
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>

            <Divider
              style={{
                backgroundColor: "#424242",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              or continue with
            </Divider>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <IconButton
                style={{ color: "#4db8ff", transition: "transform 0.2s" }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FaGoogle size={22} />
              </IconButton>
              <IconButton
                style={{ color: "#E0E0E0", transition: "transform 0.2s" }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FaGithub size={22} />
              </IconButton>
            </div>

            <Typography align="center" style={{ color: "#B0BEC5", marginTop: "16px", fontSize: "14px" }}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button
                style={{ color: "#4db8ff", textTransform: "none" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Login"}
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
