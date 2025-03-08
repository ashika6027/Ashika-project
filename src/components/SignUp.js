import { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#212121",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "50%", padding: "24px" }}
      >
        <Card
          sx={{
            backgroundColor: "#1E1E1E",
            color: "white",
            padding: 3,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#90CAF9", fontWeight: "bold", mb: 2 }}
            >
              {isLogin ? "Login to Your Account" : "Create an Account"}
            </Typography>

            <form
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  sx={{
                    input: {
                      background: "#424242",
                      borderRadius: 1,
                      color: "white",
                    },
                  }}
                />
              )}
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                sx={{
                  input: {
                    background: "#424242",
                    borderRadius: 1,
                    color: "white",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                sx={{
                  input: {
                    background: "#424242",
                    borderRadius: 1,
                    color: "white",
                  },
                }}
              />
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  sx={{
                    input: {
                      background: "#424242",
                      borderRadius: 1,
                      color: "white",
                    },
                  }}
                />
              )}
              {isLogin && (
                <Typography
                  align="right"
                  sx={{
                    color: "#90CAF9",
                    fontSize: 14,
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
                sx={{
                  background: "#2196F3",
                  ":hover": { transform: "scale(1.05)" },
                }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>

            <Divider
              sx={{
                backgroundColor: "#424242",
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              or continue with
            </Divider>

            <div
              style={{ display: "flex", justifyContent: "center", gap: "16px" }}
            >
              <IconButton
                sx={{ color: "#90CAF9", ":hover": { transform: "scale(1.1)" } }}
              >
                <FaGoogle size={24} />
              </IconButton>
              <IconButton
                sx={{ color: "#E0E0E0", ":hover": { transform: "scale(1.1)" } }}
              >
                <FaGithub size={24} />
              </IconButton>
            </div>

            <Typography
              align="center"
              sx={{ color: "#B0BEC5", marginTop: "24px", fontSize: 14 }}
            >
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button
                sx={{ color: "#90CAF9", textTransform: "none" }}
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
