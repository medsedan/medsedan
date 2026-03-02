import { Select, MenuItem } from "@mui/material";
import { toast } from "react-toastify";

export default function ReportDropdown() {
  const handleReport = (type) => {
    if (type) toast.info(`Contacting ${type}...`);
  };

  return (
    <Select defaultValue="" onChange={e => handleReport(e.target.value)} fullWidth>
      <MenuItem value="">Report</MenuItem>
      <MenuItem value="Police">Police</MenuItem>
      <MenuItem value="Hospital">Hospital</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
}