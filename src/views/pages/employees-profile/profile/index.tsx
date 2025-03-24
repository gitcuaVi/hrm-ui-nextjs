// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutSection from 'src/views/pages/user-profile/profile/AboutSection'
import ProbationSection from 'src/views/pages/user-profile/profile/ProbationSection'
import HealthSection from 'src/views/pages/user-profile/profile/HealthSection'
import ZaloSection from 'src/views/pages/user-profile/profile/ZaloSection'
import ConnectionsTeams from 'src/views/pages/user-profile/profile/ConnectionsTeams'
import EmployeeProfileForm from './EmployeeProfileForm'

// ** Types
import { ProfileTabType } from 'src/@fake-db/types'

const ProfileTab = ({ data }: { data: ProfileTabType }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={4}>
    <EmployeeProfileForm />
    </Grid>
  ) : null
}

export default ProfileTab













     
