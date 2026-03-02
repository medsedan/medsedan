import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/home");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, mt: 5 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <TextField fullWidth margin="normal" label="Email" onChange={e => setEmail(e.target.value)} />
        <TextField fullWidth margin="normal" type="password" label="Password" onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
        <Typography sx={{ mt: 2 }}>
          Don’t have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Paper>
    </Container>
  );
}