import { useState } from 'react';
import {
  Box, Tabs, Tab, Button, TextField, MenuItem
} from '@mui/material';

interface EmployeeAddressForm {
  employee: any;
}

const EmployeeAddressForm: React.FC<EmployeeAddressForm> = ({ employee }) => {

  const [activeTab, setActiveTab] = useState<number>(0);

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
        <Tab label="Nơi sinh" />
        <Tab label="Hộ khẩu" />
        <Tab label="Thường trú" />
      </Tabs>

      {/* Nội dung form bên phải */}
      <Box sx={{ flex: 1, padding: 2 }}>
        {activeTab === 0 && (
          <Box>
            <TextField fullWidth label="Địa chỉ" margin="normal" />
            <TextField select fullWidth label="Tỉnh/Thành phố" margin="normal">
              <MenuItem value="hanoi">Hà Nội</MenuItem>
              <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
            </TextField>
            <TextField select fullWidth label="Huyện" margin="normal">
              <MenuItem value="huyenA">Huyện A</MenuItem>
              <MenuItem value="huyenB">Huyện B</MenuItem>
            </TextField>
            <TextField select fullWidth label="Phường/Xã" margin="normal">
              <MenuItem value="phuongA">Phường A</MenuItem>
              <MenuItem value="phuongB">Phường B</MenuItem>
            </TextField>
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <TextField fullWidth label="Địa chỉ" margin="normal" />
            <TextField select fullWidth label="Tỉnh/Thành phố" margin="normal">
              <MenuItem value="hanoi">Hà Nội</MenuItem>
              <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
            </TextField>
            <TextField select fullWidth label="Huyện" margin="normal">
              <MenuItem value="huyenA">Huyện A</MenuItem>
              <MenuItem value="huyenB">Huyện B</MenuItem>
            </TextField>
            <TextField select fullWidth label="Phường/Xã" margin="normal">
              <MenuItem value="phuongA">Phường A</MenuItem>
              <MenuItem value="phuongB">Phường B</MenuItem>
            </TextField>
          </Box>
        )}
        {activeTab === 2 && (
          <Box>
            <TextField fullWidth label="Địa chỉ" margin="normal" />
            <TextField select fullWidth label="Tỉnh/Thành phố" margin="normal">
              <MenuItem value="hanoi">Hà Nội</MenuItem>
              <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
            </TextField>
            <TextField select fullWidth label="Huyện" margin="normal">
              <MenuItem value="huyenA">Huyện A</MenuItem>
              <MenuItem value="huyenB">Huyện B</MenuItem>
            </TextField>
            <TextField select fullWidth label="Phường/Xã" margin="normal">
              <MenuItem value="phuongA">Phường A</MenuItem>
              <MenuItem value="phuongB">Phường B</MenuItem>
            </TextField>
          </Box>
        )
        }

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

export default EmployeeAddressForm;
