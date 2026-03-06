import { Paper } from "@mui/material";

export default function MapFrame({ lat, lng }) {
  return (
    <Paper elevation={8} sx={{ p: 2, mb: 3, borderRadius: 3 }}>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d36.6428!3d-1.1078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b5e7e5c9e1b%3A0x6b5e9b9b9b9b9b9b!2sLimuru%2C%20Kiambu%20County%2C%20Kenya!5e0!3m2!1sen!2sus!4v9999999999999">
        width="100%"
        height="400"
        style={{ borderRadius: "10px" }}
      />
    </Paper>
  );
}
