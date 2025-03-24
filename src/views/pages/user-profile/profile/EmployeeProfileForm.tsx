import { useState } from 'react';
import { Box, Tabs, Tab, Button, TextField, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

const EmployeeProfileForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', maxWidth: 1000, margin: 'auto', padding: 3 }}>
      {/* Tabs bên trái */}
      <Tabs
        orientation={window.innerWidth < 600 ? "horizontal" : "vertical"}
        variant="scrollable"
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
        sx={{ minWidth: { md: 200, xs: '100%' } }}
      >
        <Tab label="Thông tin nhân viên" />
        <Tab label="Thông tin liên lạc" />
        <Tab label="Thông tin thử việc" />
        <Tab label="Thông tin sức khỏe" />
        <Tab label="Zalo" />
      </Tabs>

      {/* Nội dung form bên phải */}
      <Box sx={{ flex: 1, padding: 2 }}>
        {activeTab === 0 && (
          <Box>
            <TextField fullWidth label="Mã nhân viên" required margin="normal" />
            <TextField fullWidth label="Họ" required margin="normal" />
            <TextField fullWidth label="Tên" required margin="normal" />
            <TextField fullWidth label="Ngày sinh" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            <TextField select fullWidth label="Tình trạng hôn nhân" margin="normal">
              <MenuItem value="single">Độc thân</MenuItem>
              <MenuItem value="married">Đã kết hôn</MenuItem>
            </TextField>
            <TextField fullWidth label="Số thẻ" required margin="normal" />
          </Box>
        )}
        {activeTab === 1 && (
          <Box>
            <TextField fullWidth label="Số điện thoại" margin="normal" />
            <TextField fullWidth label="Số di động" required margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
          </Box>
        )}
        {activeTab === 2 && (
          <Box>
            <TextField fullWidth label="Ngày bắt đầu thử việc" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            <TextField fullWidth label="Thời gian thử việc" margin="normal" />
          </Box>
        )}
        {activeTab === 3 && (
          <Box>
            <TextField fullWidth label="Sức khỏe" margin="normal" />
            <TextField fullWidth label="Cân nặng (kg)" type="number" margin="normal" />
            <TextField fullWidth label="Chiều cao (cm)" type="number" margin="normal" />
          </Box>
        )}
        {activeTab === 4 && (
          <Box>
            <TextField fullWidth label="Zalo ID" margin="normal" />
            <TextField fullWidth label="Zalo Verify Code" margin="normal" />
            <FormControlLabel control={<Checkbox />} label="Zalo Verified" />
          </Box>
        )}

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
    </Box>
  );
};

export default EmployeeProfileForm;
