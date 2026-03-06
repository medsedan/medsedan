import { Paper } from "@mui/material";

export default function MapFrame({ lat, lng }) {
  return (
    <Paper elevation={8} sx={{ p: 2, mb: 3, borderRadius: 3 }}>
      <iframe
        src="https://maps.google.com/maps?q=-1.107778,36.642778&z=15&output=embed"
        width="100%"
        height="400"
        style={{ borderRadius: "10px" }}
      />
    </Paper>
  );
}
