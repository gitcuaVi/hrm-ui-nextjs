// ** React Imports
import { useState, useEffect, MouseEvent, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Button, Box, Typography } from "@mui/material";
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData, deleteUser } from 'src/store/apps/user'

// ** Third Party Components
import axios from 'axios'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { CardStatsType } from 'src/@fake-db/types'
import { ThemeColor } from 'src/@core/layouts/types'
import { UsersType } from 'src/types/apps/userTypes'
import { CardStatsHorizontalProps } from 'src/@core/components/card-statistics/types'

// ** Custom Table Components Imports
import TableHeader from 'src/pages/apps/employees/TableHeader'

import EditUser from 'src/views/apps/category/accesscontrol/formusers/FormUser'
import { useTranslation } from 'react-i18next'

import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import Tooltip from '@mui/material/Tooltip';



interface UserRoleType {
  [key: string]: { icon: string; color: string }
}

interface UserStatusType {
  [key: string]: ThemeColor
}

// ** Vars
const userRoleObj: UserRoleType = {
  admin: { icon: 'mdi:laptop', color: 'error.main' },
  author: { icon: 'mdi:cog-outline', color: 'warning.main' },
  editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
  maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
  subscriber: { icon: 'mdi:account-outline', color: 'primary.main' }
}

interface CellType {
  row: UsersType
}

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))


const RowOptions = ({ id, userData }: { id: number | string; userData: UsersType }) => {
  // ** Hooks

  const dispatch = useDispatch<AppDispatch>()
  const [openEdit, setOpenEdit] = useState<boolean>(false)

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteUser(id))
    handleRowOptionsClose()
  }
  const handleEditClickOpen = () => setOpenEdit(true)


  const { t } = useTranslation()


  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <Link href={`/apps/employees/form-edit-employees/ProfileEditLayout?id=${id}`} passHref legacyBehavior>
          <MenuItem component="a" sx={{ '& svg': { mr: 2 }, textDecoration: 'none', color: 'inherit' }}>
            <Icon icon="mdi:pencil-outline" fontSize={20} />
            {t('Edit')}
          </MenuItem>
        </Link>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
          {t('Delete')}
        </MenuItem>
      </Menu>
      <EditUser open={openEdit} setOpen={setOpenEdit} userData={userData} />
    </>
  )
}



const UserList = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** State
  const [role, setRole] = useState<string>('')
  const [plan, setPlan] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(
      fetchData({
        role,
        status,
        q: value,
        currentPlan: plan
      })
    )
  }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handleStatusChange = useCallback((e: SelectChangeEvent) => {
    setStatus(e.target.value)
  }, [])

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const filteredUsers = store.data ? store.data.filter((user: UsersType) => user.role !== 'admin') : [];

  const { t } = useTranslation()

  const [exportAnchorEl, setExportAnchorEl] = useState<null | HTMLElement>(null)

  const handleExportClick = (event: MouseEvent<HTMLElement>) => {
    setExportAnchorEl(event.currentTarget)
  }

  const handleExportClose = () => {
    setExportAnchorEl(null)
  }

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUsers)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Users')
    XLSX.writeFile(wb, 'User_List.xlsx')
    handleExportClose()
  }

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUsers)
    const csv = XLSX.utils.sheet_to_csv(ws)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    FileSaver.saveAs(blob, 'User_List.csv')
    handleExportClose()
  }

  const exportToPDF = () => {
    alert('Chức năng xuất PDF chưa được triển khai')
    handleExportClose()
  }



  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  // Mở Dialog
  const handleClickOpen = () => setOpen(true);
  // Đóng Dialog
  const handleClose = () => setOpen(false);

  // Xử lý file tải lên
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };


  const columns: GridColDef[] = [
    { flex: 0.05, minWidth: 100, field: "employeeNo", headerName: t("Employee No") as string },
    {
      flex: 0.05, minWidth: 100, renderCell: (params) => (
        <Tooltip title={params.value}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 150 }}>
            {params.value}
          </span>
        </Tooltip>
      ), field: "fullName", headerName: t("Full Name") as string
    },
    { flex: 0.05, minWidth: 90, sortable: false, field: "position", headerName: t("Position") as string },
    {
      flex: 0.05, minWidth: 175, renderCell: (params) => (
        <Tooltip title={params.value}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 150 }}>
            {params.value}
          </span>
        </Tooltip>
      ), field: "email", headerName: t("Email") as string
    },
    { flex: 0.05, minWidth: 150, field: "phoneNumber", headerName: t("Phone Number") as string },
    {
      flex: 0.05, minWidth: 180, renderCell: (params) => (
        <Tooltip title={params.value}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 150 }}>
            {params.value}
          </span>
        </Tooltip>
      ), field: "address", headerName: t("Address") as string
    },
    { flex: 0.05, minWidth: 100, field: "Status", headerName: t("Status") as string },
    {
      flex: 0.05, minWidth: 160, renderCell: (params) => (
        <Tooltip title={params.value}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 150 }}>
            {params.value}
          </span>
        </Tooltip>
      ), field: "zaloMail", headerName: t("Zalo Mail") as string
    },
    { flex: 0.05, minWidth: 80, field: "zaloVerifyCode", headerName: t("Zalo Code") as string },
    {
      flex: 0.05,
      minWidth: 110,
      field: "actions",
      sortable: false,
      headerName: t("Actions") as string,

      renderCell: ({ row }) => <RowOptions id={row.id} userData={row} />,
    },
  ];



  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Box
            sx={{
              width: '100%',
              ml: { xs: 0, sm: 4 },
              textAlign: { xs: 'center', sm: 'left' },
              mb: 4
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 2 }}>
              Danh sách nhân viên
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', maxWidth: 500, mx: { xs: 'auto', sm: 0 } }}
            >
              Quản lý hồ sơ nhân viên, chức vụ, giáo dục & tiền lương
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' },
              alignItems: 'center',
              mb: 2,
              mr: 5
            }}
          >

            <Button variant="outlined" size="small" startIcon={<Icon icon="mdi:export" />} onClick={handleExportClick}>
              {t('Export')}
            </Button>
            <Menu
              anchorEl={exportAnchorEl}
              open={Boolean(exportAnchorEl)}
              onClose={handleExportClose}
            >
              <MenuItem onClick={exportToExcel}>📊 {t('Export to Excel')}</MenuItem>
              <MenuItem onClick={exportToCSV}>📄 {t('Export to CSV')}</MenuItem>
              <MenuItem onClick={exportToPDF}>📜 {t('Export to PDF')}</MenuItem>
            </Menu>
            {/* Nút Thêm Nhân Viên */}
            <Button variant="contained" size="small" startIcon={<Icon icon="mdi:account-plus-outline" />} onClick={handleClickOpen}>
              Thêm nhân viên
            </Button>

            {/* Dialog Thêm Nhân Viên */}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Thêm nhân viên</DialogTitle>
              <DialogContent>
                <input
                  accept=".xlsx, .xls, .csv"
                  style={{ display: 'none' }}
                  id="upload-file"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="upload-file">
                  <Button variant="outlined" size="small" component="span">
                    {file ? file.name : 'Vui lòng chọn tệp danh sách nhân viên'}
                  </Button>
                </label>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} startIcon={<Icon icon="mdi:close" />}>
                  Đóng
                </Button>
                <Button variant="contained" color="primary">
                  Thêm nhân viên
                </Button>
              </DialogActions>
            </Dialog>

            <Button variant="contained" size="small" startIcon={<Icon icon="mdi:key-outline" />}>
              {t('Tạo code xác thực Zalo')}
            </Button>
            <Button variant="contained" size="small" startIcon={<Icon icon="mdi:email-outline" />}>
              {t('Email xác thực Zalo')}
            </Button>
            <Link href="/apps/employees/form-add-employees/ProfileLayout" passHref>
              <Button variant="contained" size="small" startIcon={<Icon icon="mdi:account-plus-outline" />}>
                {t('Nhân viên mới')}
              </Button>
            </Link>

          </Box>

          <Card>
            <CardHeader ariant="h5" title={t('searchFilters')} sx={{ paddingBottom: 1 }} />
            <CardContent sx={{ padding: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="status-select">{t('Select Status')}</InputLabel>
                    <Select
                      value={status}
                      id="select-status"
                      label="Select Status"
                      labelId="status-select"
                      onChange={handleStatusChange}
                    >
                      <MenuItem value="">{t('All')}</MenuItem>
                      <MenuItem value="pending">{t('pending')}</MenuItem>
                      <MenuItem value="active">{t('active')}</MenuItem>
                      <MenuItem value="inactive">{t('inactive')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Divider />
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
          <DataGrid
            autoHeight
            rows={filteredUsers}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}

            onPaginationModelChange={setPaginationModel}
            density="compact"
            sx={{
              '& .MuiDataGrid-virtualScroller': {
                overflowX: 'auto'
              }
            }}
          />

        </Card>
      </Grid>


      {/* <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} /> */}
    </Grid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default UserList
