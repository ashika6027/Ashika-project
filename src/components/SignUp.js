import { useState } from "react"; 
import { Button, TextField, Card, CardContent, Typography, Divider, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6"
      >
        <Card sx={{ backgroundColor: "#1E1E1E", color: "white", padding: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" sx={{ color: "#90CAF9", fontWeight: "bold", mb: 2 }}>
              {isLogin ? "Login to Your Account" : "Create an Account"}
            </Typography>

            <form className="space-y-4">
              {!isLogin && (
                <TextField fullWidth label="Full Name" variant="outlined" InputProps={{ style: { color: "white" } }} sx={{ input: { background: "#424242", borderRadius: 1 } }} />
              )}
              <TextField fullWidth label="Email" type="email" variant="outlined" InputProps={{ style: { color: "white" } }} sx={{ input: { background: "#424242", borderRadius: 1 } }} />
              <TextField fullWidth label="Password" type="password" variant="outlined" InputProps={{ style: { color: "white" } }} sx={{ input: { background: "#424242", borderRadius: 1 } }} />
              {!isLogin && (
                <TextField fullWidth label="Confirm Password" type="password" variant="outlined" InputProps={{ style: { color: "white" } }} sx={{ input: { background: "#424242", borderRadius: 1 } }} />
              )}

              {isLogin && (
                <Typography align="right" sx={{ color: "#90CAF9", fontSize: 14, mt: 1, cursor: "pointer" }}>
                  Forgot Password?
                </Typography>
              )}

              <Button fullWidth variant="contained" sx={{ background: "#2196F3", ":hover": { transform: "scale(1.05)" } }}>
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>

            <Divider sx={{ backgroundColor: "#424242", my: 3 }}>or continue with</Divider>

            <div className="flex justify-center space-x-4">
              <IconButton sx={{ color: "#90CAF9", ":hover": { transform: "scale(1.1)" } }}>
                <FaGoogle size={24} />
              </IconButton>
              <IconButton sx={{ color: "#E0E0E0", ":hover": { transform: "scale(1.1)" } }}>
                <FaGithub size={24} />
              </IconButton>
            </div>

            <Typography align="center" sx={{ color: "#B0BEC5", mt: 3, fontSize: 14 }}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button sx={{ color: "#90CAF9", textTransform: "none" }} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Login"}
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
