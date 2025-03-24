// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UsersType = {
  id: number;  // ID của người dùng
  employeeNo: string;  // Mã nhân viên
  role: string;  // Vai trò
  fullName: string;  // Tên đầy đủ
  position: string;  // Vị trí công việc
  username: string;  // Tên đăng nhập
  email: string;  // Địa chỉ email
  phoneNumber: string;  // Số điện thoại
  address: string;  // Địa chỉ
  Status: string;  // Trạng thái (Active, Inactive, Pending)
  zaloMail: string;  // Zalo ID
  zaloVerifyCode: string;  // Mã xác minh Zalo
  status: string;  // Trạng thái công việc (active, inactive, pending)
  joinAt: string;  // Ngày gia nhập
  probationStartDate: string;  // Ngày bắt đầu thử việc
  probationEndDate: string;  // Ngày kết thúc thử việc
  probationDuration: string;  // Thời gian thử việc
  healthNotes: string;  // Ghi chú sức khỏe
  company: string;  // Công ty
  passportNumber: string;  // Số hộ chiếu
  passportIssuedBy: string;  // Cấp hộ chiếu bởi
  passportIssueDate: string;  // Ngày phát hành hộ chiếu
  passportExpiryDate: string;  // Ngày hết hạn hộ chiếu
  religion: string;  // Tôn giáo
  cardType: string;  // Loại thẻ
  weight: string;  // Cân nặng
  height: string;  // Chiều cao
  healthStatus: string;  // Tình trạng sức khỏe
  zaloId: string;  // Zalo ID
};


export type ProjectListDataType = {
  id: number
  img: string
  hours: string
  totalTask: string
  projectType: string
  projectTitle: string
  progressValue: number
  progressColor: ThemeColor
}
