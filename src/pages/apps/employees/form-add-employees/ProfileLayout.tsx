import { useState, ReactElement, SyntheticEvent } from 'react'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled, Theme, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Icon from 'src/@core/components/icon'

import EmployeeProfileForm from 'src/pages/apps/employees/form-add-employees/profile/EmployeeProfileForm'
import EmployeeTaxInfoForm from 'src/pages/apps/employees/form-add-employees/profile/EmployeeTaxInfoForm'
import EmployeeInsuranceForm from 'src/pages/apps/employees/form-add-employees/profile/EmployeeInsuranceForm'
import UserProfileHeader from 'src/pages/apps/employees/form-add-employees/ProfileHeader'
import EmployeeBankAccountForm from 'src/pages/apps/employees/form-add-employees/profile/EmployeeBankAccountForm'
import EmployeeGovernmentInfoForm from 'src/pages/apps/employees/form-add-employees/profile/EmployeeGovernmentInfoForm'
import EmployeeAddressForm from 'src/pages/apps/employees/form-add-employees/profile/EmployeeAddressForm'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.pxToRem(12),
    [theme.breakpoints.up('sm')]: {
      minWidth: 120,
      fontSize: theme.typography.pxToRem(14)
    }
  }
}))

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  const tabContentList: { [key: string]: ReactElement } = {
    profile: <EmployeeProfileForm />,
    taxinfo: <EmployeeTaxInfoForm />,
    insurance: <EmployeeInsuranceForm />,
    bankaccount: <EmployeeBankAccountForm />,
    governmentinfo: <EmployeeGovernmentInfoForm />,
    address: <EmployeeAddressForm />
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <UserProfileHeader />
      </Grid>

      <Grid item xs={12}>
        <TabContext value={activeTab}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TabList
                variant={isMobile ? 'fullWidth' : 'scrollable'}
                scrollButtons="auto"
                onChange={handleChange}
              >
                {[
                  { value: 'profile', label: 'Thông tin nhân viên', icon: 'mdi:account-outline' },
                  { value: 'taxinfo', label: 'Thông tin về thuế', icon: 'mdi:file-document-outline' },
                  { value: 'insurance', label: 'Thông tin bảo hiểm', icon: 'mdi:shield-check-outline' },
                  { value: 'bankaccount', label: 'Thông tin ngân hàng', icon: 'mdi:bank-outline' },
                  { value: 'governmentinfo', label: 'Thông tin chính phủ', icon: 'mdi:badge-account-outline' },
                  { value: 'address', label: 'Địa chỉ', icon: 'mdi:map-marker-outline' }
                ].map(tab => (
                  <Tab
                    key={tab.value}
                    value={tab.value}
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: theme.typography.pxToRem(isMobile ? 10 : 12),
                          '& svg': { mr: isMobile ? 0 : 1 }
                        }}
                      >
                        <Icon fontSize={18} icon={tab.icon} />
                        {!isMobile && tab.label}
                      </Box>
                    }
                  />
                ))}
              </TabList>
            </Grid>
            <Grid item xs={12} sx={{ pt: 4 }}>
              <TabPanel sx={{ p: 0 }} value={activeTab}>
                {tabContentList[activeTab]}
              </TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default UserProfile
