import { useState } from 'react';
import {
  Box, Tabs, Tab, Button, TextField, MenuItem, Checkbox,
  FormControlLabel, Avatar, IconButton
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const EmployeeProfileForm = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };


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
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Avatar src={avatar ?? undefined} sx={{ width: 80, height: 80, marginRight: 2 }} />
              <IconButton component="label">
                <input type="file" accept="image/png, image/jpg, image/jpeg" hidden onChange={handleAvatarChange} />
                <PhotoCamera />
              </IconButton>
            </Box>
            <TextField select fullWidth label="Trạng thái" required margin="normal">
              <MenuItem value="active">Đang làm việc</MenuItem>
              <MenuItem value="inactive">Nghỉ việc</MenuItem>
            </TextField>
            <TextField select fullWidth label="Thay đổi" required margin="normal">
              <MenuItem value="promotion">Thăng chức</MenuItem>
              <MenuItem value="transfer">Chuyển công tác</MenuItem>
            </TextField>
            <TextField fullWidth label="Mã nhân viên" required margin="normal" />
            <TextField fullWidth label="Họ" required margin="normal" />
            <TextField fullWidth label="Tên" required margin="normal" />
            <TextField fullWidth label="Ngày sinh" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            <TextField select fullWidth label="Tình trạng hôn nhân" required margin="normal">
              <MenuItem value="single">Độc thân</MenuItem>
              <MenuItem value="married">Đã kết hôn</MenuItem>
            </TextField>
            <TextField select fullWidth label="Dân tộc" margin="normal">
              <MenuItem value="kinh">Kinh</MenuItem>
              <MenuItem value="tay">Tày</MenuItem>
            </TextField>
            <TextField select fullWidth label="Tôn giáo" margin="normal">
              <MenuItem value="none">Không</MenuItem>
              <MenuItem value="buddhism">Phật giáo</MenuItem>
            </TextField>
            <TextField select fullWidth label="Quốc tịch" margin="normal">
              <MenuItem value="vietnam">Việt Nam</MenuItem>
              <MenuItem value="other">Khác</MenuItem>
            </TextField>
            <TextField select fullWidth label="Loại thẻ" margin="normal">
              <MenuItem value="cmnd">CMND</MenuItem>
              <MenuItem value="cccd">CCCD</MenuItem>
            </TextField>
            <TextField fullWidth label="Ngày cấp" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            <TextField fullWidth label="Nơi cấp" margin="normal" />
            <TextField fullWidth label="Số thẻ" required margin="normal" />
            <TextField select fullWidth label="Thuộc công ty" margin="normal">
              <MenuItem value="company_a">Công ty A</MenuItem>
              <MenuItem value="company_b">Công ty B</MenuItem>
            </TextField>
            <TextField fullWidth label="Hộ chiếu" margin="normal" />
            <TextField fullWidth label="Ngày phát hành hộ chiếu" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            <TextField fullWidth label="Cấp hộ chiếu bởi" margin="normal" />
            <TextField fullWidth label="Ngày hết hạn hộ chiếu" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            <TextField select fullWidth label="Giới tính" required margin="normal">
              <MenuItem value="male">Nam</MenuItem>
              <MenuItem value="female">Nữ</MenuItem>
              <MenuItem value="other">Khác</MenuItem>
            </TextField>
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
            <TextField
              fullWidth
              label="Ngày bắt đầu thử việc"
              type="date"
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Thời gian thử việc"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày kết thúc thử việc"
              type="date"
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày bắt đầu"
              type="date"
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày kết thúc"
              type="date"
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
          </Box>
        )
        }
        {activeTab === 3 && (
          <Box>
            <TextField fullWidth label="Sức khỏe" margin="normal" />
            <TextField fullWidth label="Cân nặng (kg)" type="number" margin="normal" />
            <TextField fullWidth label="Chiều cao (cm)" type="number" margin="normal" />
            <TextField fullWidth label="Ghi chú" margin="normal" />
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
