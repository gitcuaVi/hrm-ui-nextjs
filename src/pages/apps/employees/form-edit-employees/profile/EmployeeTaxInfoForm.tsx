import { Box, TextField, Button } from "@mui/material";
interface EmployeeTaxInfoForm {
  employee: any;
}

const EmployeeTaxInfoForm: React.FC<EmployeeTaxInfoForm> = ({ employee }) => {
  return (
    <Box>
      <TextField fullWidth label="Số Thuế cá nhân" margin="normal" />
      <TextField
        fullWidth
        label="Ngày phát hành Thuế cá nhân"
        type="date"
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />
      <TextField fullWidth label="Vấn thề Thuế cá nhân" margin="normal" />


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

export default EmployeeTaxInfoForm;