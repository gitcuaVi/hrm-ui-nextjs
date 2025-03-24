import { useState, useEffect } from "react";
import {
  Box, Tabs, Tab, Button, TextField, MenuItem, Checkbox,
  FormControlLabel, Avatar, IconButton
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

interface EmployeeProfileFormProps {
  employee: any;
}

const EmployeeProfileForm: React.FC<EmployeeProfileFormProps> = ({ employee }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    employeeNo: "",            // Mã nhân viên
    firstName: "",             // Họ
    lastName: "",              // Tên
    username: "",              // Tên đăng nhập
    dob: "",                   // Ngày sinh
    gender: "",                // Giới tính
    phoneNumber: "",           // Số điện thoại
    mobileNumber: "",          // Số di động
    email: "",                 // Email
    maritalStatus: "",         // Tình trạng hôn nhân
    nationality: "",           // Quốc tịch
    cardNumber: "",            // Số thẻ
    issueDate: "",             // Ngày cấp
    issuePlace: "",            // Nơi cấp
    passportNumber: "",        // Số hộ chiếu
    passportExpiryDate: "",    // Ngày hết hạn hộ chiếu
    healthStatus: "",          // Tình trạng sức khỏe
    weight: "",                // Cân nặng
    height: "",                // Chiều cao
    zaloMail: "",              // Zalo ID
    zaloVerifyCode: "",        // Mã xác minh Zalo
    zaloVerified: false,       // Trạng thái xác minh Zalo
    address: "",               // Địa chỉ
    position: "",              // Vị trí công việc
    status: "",                // Trạng thái công việc
    joinAt: "",                // Ngày gia nhập
    probationStartDate: "",    // Ngày bắt đầu thử việc
    probationEndDate: "",      // Ngày kết thúc thử việc
    probationDuration: "",      // Thời gian thử việc
    healthNotes: "",           // Ghi chú sức khỏe
    company: "",               // Công ty
    passportIssuedBy: "",      // Cấp hộ chiếu bởi
    religion: "",              // Tôn giáo
    cardType: "",              // Loại thẻ
    passportIssueDate: "",     // Ngày phát hành hộ chiếu
    startDate: "",             // Ngày bắt đầu
    endDate: "",               // Ngày kết thúc
    zaloId: "",                // Zalo ID
  });


  // Load dữ liệu từ `employee` khi component mount
  useEffect(() => {
    if (employee) {
      setFormData({ ...formData, ...employee });
      setAvatar(employee.avatar || null);
    }
  }, [employee]);

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý thay đổi checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  // Xử lý thay đổi avatar
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  // Xử lý submit dữ liệu
  const handleSubmit = () => {
    console.log("Dữ liệu gửi đi:", formData);
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      maxWidth: 1000, margin: "auto",
      padding: 3
    }}>
      {/* Tabs bên trái */}
      <Tabs
        orientation={window.innerWidth < 600 ? "horizontal" : "vertical"}
        variant="scrollable"
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
        sx={{ minWidth: { md: 200, xs: "100%" } }}
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
            {/* Avatar */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <Avatar src={avatar ?? undefined} sx={{ width: 80, height: 80, marginRight: 2 }} />
              <IconButton component="label">
                <input type="file"
                  accept="image/*"
                  hidden
                  onChange={handleAvatarChange} />
                <PhotoCamera />
              </IconButton>
            </Box>

            {/* Thông tin nhân viên */}
            <TextField
              fullWidth
              label="Mã nhân viên"
              name="employeeNo"
              value={formData.employeeNo}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Họ"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Tên"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày sinh"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              select fullWidth
              label="Giới tính"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              margin="normal">
              <MenuItem value="male">Nam</MenuItem>
              <MenuItem value="female">Nữ</MenuItem>
              <MenuItem value="other">Khác</MenuItem>
            </TextField>
            <TextField
              select fullWidth
              label="Tình trạng hôn nhân"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
              margin="normal">
              <MenuItem value="single">Độc thân</MenuItem>
              <MenuItem value="married">Đã kết hôn</MenuItem>
            </TextField>
            <TextField
              select fullWidth
              label="Dân tộc"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              margin="normal">
              <MenuItem value="kinh">Kinh</MenuItem>
              <MenuItem value="tay">Tày</MenuItem>
            </TextField>
            <TextField
              select fullWidth
              label="Tôn giáo"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              margin="normal">
              <MenuItem value="none">Không</MenuItem>
              <MenuItem value="buddhism">Phật giáo</MenuItem>
            </TextField>
            <TextField
              select fullWidth
              label="Quốc tịch"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              margin="normal">
              <MenuItem value="vietnam">Việt Nam</MenuItem>
              <MenuItem value="other">Khác</MenuItem>
            </TextField>
            <TextField
              select fullWidth
              label="Loại thẻ"
              name="cardType"
              value={formData.cardType}
              onChange={handleChange}
              margin="normal">
              <MenuItem value="cmnd">CMND</MenuItem>
              <MenuItem value="cccd">CCCD</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Ngày cấp"
              name="issueDate"
              type="date"
              value={formData.issueDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Nơi cấp"
              name="issuePlace"
              value={formData.issuePlace}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Số thẻ"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              select fullWidth
              label="Thuộc công ty"
              name="company"
              value={formData.company}
              onChange={handleChange}
              margin="normal">
              <MenuItem value="company_a">Công ty A</MenuItem>
              <MenuItem value="company_b">Công ty B</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Hộ chiếu"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày phát hành hộ chiếu"
              name="passportIssueDate"
              type="date"
              value={formData.passportIssueDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal" />
            <TextField
              fullWidth
              label="Cấp hộ chiếu bởi"
              name="passportIssuedBy"
              value={formData.passportIssuedBy}
              onChange={handleChange}
              margin="normal" />
            <TextField
              fullWidth
              label="Ngày hết hạn hộ chiếu"
              name="passportExpiryDate"
              type="date"
              value={formData.passportExpiryDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal" />
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <TextField
              fullWidth label="Số điện thoại"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Số di động"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        )}

        {activeTab === 2 && (
          <Box>
            <TextField
              fullWidth
              label="Ngày bắt đầu thử việc"
              name="probationStartDate"
              type="date"
              value={formData.probationStartDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Thời gian thử việc"
              name="probationDuration"
              value={formData.probationDuration}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày kết thúc thử việc"
              name="probationEndDate"
              type="date"
              value={formData.probationEndDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày bắt đầu"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ngày kết thúc"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
          </Box>
        )}

        {activeTab === 3 && (
          <Box>
            <TextField
              fullWidth
              label="Sức khỏe"
              name="healthStatus"
              value={formData.healthStatus}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Cân nặng (kg)"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              margin="normal" />
            <TextField
              fullWidth
              label="Chiều cao (cm)"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Ghi chú"
              name="healthNotes"
              value={formData.healthNotes}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        )}

        {activeTab === 4 && (
          <Box>
            <TextField
              fullWidth
              label="Zalo ID"
              name="zaloId"
              value={formData.zaloId}
              onChange={handleChange}
              margin="normal" />
            <TextField
              fullWidth
              label="Zalo Verify Code"
              name="zaloVerifyCode"
              value={formData.zaloVerifyCode}
              onChange={handleChange}
              margin="normal"
            />
            <FormControlLabel
              control={<Checkbox name="zaloVerified" checked={formData.zaloVerified}
                onChange={handleCheckboxChange}
              />}
              label="Zalo Verified"
            />
          </Box>
        )}

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
          <Button variant="outlined">Hủy</Button>
          <Box>
            <Button variant="contained" color="secondary" sx={{ marginRight: 1 }}>
              Lưu & Tạo Mới
            </Button>
            <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
              Lưu & Tiếp Tục
            </Button>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Lưu
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeProfileForm;