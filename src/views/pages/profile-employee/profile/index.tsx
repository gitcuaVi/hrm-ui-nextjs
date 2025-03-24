// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutSection from 'src/views/pages/user-profile/profile/AboutSection'
import ProbationSection from 'src/views/pages/user-profile/profile/ProbationSection'
import HealthSection from 'src/views/pages/user-profile/profile/HealthSection'
import ZaloSection from 'src/views/pages/user-profile/profile/ZaloSection'
import ConnectionsTeams from 'src/views/pages/user-profile/profile/ConnectionsTeams'

// ** Types
import { ProfileTabType } from 'src/@fake-db/types'

const ProfileTab = ({ data }: { data: ProfileTabType }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={4}>
      <Grid item lg={4} md={5} xs={12}>
        <AboutSection about={data.about} contacts={data.contacts}/>
      </Grid>
      <Grid item lg={8} md={7} xs={12}>
        <Grid container spacing={4}>
        <Grid item xs={12}>
            <ProbationSection probation={data.probation} />
        </Grid>
        <Grid item xs={12}>
            <HealthSection health={data.health} />
        </Grid>
        <Grid item xs={12}>
            <ZaloSection zalo={data.zalo} />
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

export default ProfileTab













     
