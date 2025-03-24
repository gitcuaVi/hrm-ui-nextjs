import { Box, TextField, Button } from "@mui/material";

const EmployeeBankAccountForm = () => {
  return (
    <Box>
      <TextField fullWidth label="Số ngân hàng" margin="normal" />
      <TextField fullWidth label="Tên ngân hàng" margin="normal" />
      <TextField fullWidth label="Địa chỉ ngân hàng" margin="normal" />

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

export default EmployeeBankAccountForm;
