import { useEffect, useState } from "react";
import { realtimeDB } from "../firebase";
import { ref, onValue } from "firebase/database";
import { Container, Typography } from "@mui/material";
import MapFrame from "../components/MapFrame";
import ReportDropdown from "../components/ReportDropDown";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const locRef = ref(realtimeDB, "wheelchair/location");
    onValue(locRef, snapshot => {
      const data = snapshot.val();
      if (data) setCoords({ lat: data.lat, lng: data.lng });
    });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Find Wheelchair Location
      </Typography>
      <MapFrame lat={coords.lat} lng={coords.lng} />
      <ReportDropdown />
      <ToastContainer />
    </Container>
  );
}