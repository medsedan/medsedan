import { useEffect, useState } from "react";
import { Container, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Help({ coords = { lat: 0, lng: 0 } }) {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://api.gemini.com/nearby", {
          method: "POST",
          body: JSON.stringify({ lat: coords.lat, lng: coords.lng }),
          headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        setContacts(data.results || []);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    fetchContacts();
  }, [coords]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Nearby Help Centers</Typography>
      {contacts.map((c, i) => (
        <Paper key={i} elevation={5} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
          <Typography variant="h6">{c.name}</Typography>
          <Typography>{c.phone}</Typography>
        </Paper>
      ))}
      <Button variant="outlined" onClick={() => navigate("/home")}>Back</Button>
    </Container>
  );
}