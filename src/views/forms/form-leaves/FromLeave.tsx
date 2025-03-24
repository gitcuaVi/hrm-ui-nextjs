import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  TextFieldProps,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function LeaveForm() {
  const [leaveType, setLeaveType] = useState("Nghỉ một ngày");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [session, setSession] = useState("Buổi sáng");
  const [reason, setReason] = useState("");

  const leaveOptions = [
    "Nghỉ một ngày",
    "Nghỉ nhiều ngày",
    "Nghỉ nửa ngày",
  ];

  const sessionOptions = ["Buổi sáng", "Buổi chiều"];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", my: 3 }}>
          <Typography variant="h5" color="primary">
            Gửi yêu cầu xin nghỉ của bạn
          </Typography>
        </Box>
        <TextField
          fullWidth
          select
          label="Loại nghỉ"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          sx={{ mb: 2 }}
        >
          {leaveOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {leaveType === "Nghỉ nửa ngày" && (
          <TextField
            fullWidth
            select
            label="Chọn buổi"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            sx={{ mb: 2 }}
          >
            {sessionOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )}

      <DatePicker
        label="Ngày bắt đầu"
        value={startDate}
        onChange={setStartDate}
        renderInput={(params: TextFieldProps) => <TextField fullWidth sx={{ mb: 2 }} {...params} />}
      />

      {leaveType === "Nghỉ nhiều ngày" && (
        <DatePicker
          label="Ngày kết thúc"
          value={endDate}
          onChange={setEndDate}
          renderInput={(params: TextFieldProps) => <TextField fullWidth sx={{ mb: 2 }} {...params} />}
      />
        )}

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Lý do"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth color="primary">
          Gửi yêu cầu
        </Button>
      </Container>
    </LocalizationProvider>
  );
}