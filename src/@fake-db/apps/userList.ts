// ** Mock
import mock from 'src/@fake-db/mock'
import { useTranslation } from 'react-i18next'

// ** Types
import { UsersType, ProjectListDataType } from 'src/types/apps/userTypes'

const data: { users: UsersType[] } = {
  users: Array.from({ length: 3000 }, (_, i) => ({
    id: i + 1,  // ID của người dùng
    employeeNo: `EMP${String(i + 1).padStart(4, '0')}`,  // Mã nhân viên
    role: ['Admin', 'Editor', 'Author', 'Maintainer', 'Subscriber'][i % 5],  // Vai trò
    fullName: `User  ${i + 1}`,  // Tên đầy đủ
    position: ['CEO', 'Manager', 'Developer', 'Designer', 'Support'][i % 5],  // Vị trí công việc
    username: `user${i + 1}`,  // Tên đăng nhập
    email: `user${i + 1}@example.com`,  // Địa chỉ email
    phoneNumber: `090-0000-${String(i + 1).padStart(4, '0')}`,  // Số điện thoại
    address: `${i + 1} Random St, City ${i % 10}`,  // Địa chỉ
    Status: ['Active', 'Inactive', 'Pending'][i % 3],  // Trạng thái (Active, Inactive, Pending)
    zaloMail: `user${i + 1}@zalo.com`,  // Zalo ID
    zaloVerifyCode: `Z${10000 + i}`,  // Mã xác minh Zalo
    status: ['active', 'inactive', 'pending'][i % 3],  // Trạng thái công việc (active, inactive, pending)
    joinAt: `202${(i % 5) + 1}-0${(i % 9) + 1}-1${(i % 9)}`,  // Ngày gia nhập
    probationStartDate: `202${(i % 5) + 1}-0${(i % 9) + 1}-01`,  // Ngày bắt đầu thử việc
    probationEndDate: `202${(i % 5) + 1}-0${(i % 9) + 1}-15`,  // Ngày kết thúc thử việc
    probationDuration: `${(i % 3) + 1} months`,  // Thời gian thử việc
    healthNotes: `No health issues`,  // Ghi chú sức khỏe
    company: `Company ${Math.floor(i / 1000) + 1}`,  // Công ty
    passportNumber: `P${String(i + 1).padStart(6, '0')}`,  // Số hộ chiếu
    passportIssuedBy: `Authority ${Math.floor(i / 1000) + 1}`,  // Cấp hộ chiếu bởi
    passportIssueDate: `202${(i % 5) + 1}-0${(i % 9) + 1}-01`,  // Ngày phát hành hộ chiếu
    passportExpiryDate: `202${(i % 5) + 2}-0${(i % 9) + 1}-01`,  // Ngày hết hạn hộ chiếu
    religion: ['Buddhism', 'Christianity', 'Islam', 'Hinduism', 'Atheism'][i % 5],  // Tôn giáo
    cardType: ['National ID', 'Passport', 'Driver License'][i % 3],  // Loại thẻ
    weight: `${(i % 100) + 50} kg`,  // Cân nặng
    height: `${(i % 50) + 150} cm`,  // Chiều cao
    healthStatus: ['Healthy', 'Sick', 'Recovering'][i % 3],  // Tình trạng sức khỏe
    zaloId: `zalo${i + 1}`,  // Zalo ID
  })),
};



const projectListData: ProjectListDataType[] = [
  {
    id: 1,
    hours: '18:42',
    progressValue: 78,
    totalTask: '122/240',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    id: 2,
    hours: '20:42',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    id: 3,
    hours: '120:87',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    id: 4,
    hours: '89:19',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    id: 5,
    hours: '230:10',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    id: 6,
    hours: '342:41',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    id: 7,
    hours: '12:45',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data

  const lastId = Math.max(...data.users.map(u => u.id), 0)

  user.id = lastId + 1

  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/users/project-list').reply(config => {
  const { q = '' } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = projectListData.filter(
    user =>
      user.projectTitle.toLowerCase().includes(queryLowered) ||
      user.projectType.toLowerCase().includes(queryLowered) ||
      user.totalTask.toLowerCase().includes(queryLowered) ||
      user.hours.toLowerCase().includes(queryLowered) ||
      String(user.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
