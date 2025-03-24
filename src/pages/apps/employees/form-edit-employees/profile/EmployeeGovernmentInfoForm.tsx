import { Box, TextField, Button } from "@mui/material";

interface EmployeeGovernmentInfoForm {
  employee: any;
}

const EmployeeGovernmentInfoForm: React.FC<EmployeeGovernmentInfoForm> = ({ employee }) => {
  return (
    <Box>
      <TextField fullWidth label="Số đoàn viên" margin="normal" />
      <TextField fullWidth label="Ngày vào đoàn" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Nơi vào đoàn" margin="normal" />
      <TextField fullWidth label="Số thẻ Đảng viên" margin="normal" />
      <TextField fullWidth label="Ngày dự bị Đảng" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Ngày chính thức Đảng" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Nơi vào Đảng" margin="normal" />
      <TextField fullWidth label="Ngày nhập ngũ" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Ngày xuất ngũ" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Nơi nhập ngũ" margin="normal" />
      <TextField fullWidth label="Chức vụ quân sự" margin="normal" />
      <TextField fullWidth label="Ngày bắt đầu làm chính quyền" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Ngày kết thúc làm chính quyền" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
      <TextField fullWidth label="Nơi làm chính quyền" margin="normal" />
      <TextField fullWidth label="Chức vụ chính quyền" margin="normal" />

      {/* Buttons */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', marginTop: 3 }}>
        <Button variant="outlined" sx={{ marginBottom: { xs: 1, sm: 0 } }}>Cancel</Button>
        <Box>
          <Button variant="contained" color="secondary" sx={{ marginRight: 1, marginBottom: { xs: 1, sm: 0 } }}>
            Save & New
          </Button>
          <Button variant="contained" color="primary" sx={{ marginRight: 1, marginBottom: { xs: 1, sm: 0 } }}>
            Save & Continue
          </Button>
          <Button variant="contained" color="success">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeGovernmentInfoForm;
