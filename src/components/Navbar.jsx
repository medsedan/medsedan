import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Medsedan
        </Typography>
        <IconButton color="inherit" onClick={() => navigate("/home")}>
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate("/notifications")}>
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate("/help")}>
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}