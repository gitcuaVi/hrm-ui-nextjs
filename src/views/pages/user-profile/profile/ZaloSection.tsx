// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import  OptionsMenu  from 'src/@core/components/option-menu'

// ** Types
import { ProfileTabCommonType } from 'src/@fake-db/types'

interface Props {
    zalo : ProfileTabCommonType[]
}

const renderList = (arr?: ProfileTabCommonType[]) => {
  if (arr && arr.length) {
    return arr?.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon={item.icon} />
          </Box>

          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
            </Typography>
          </Box>
        </Box>
      )
    })
  } else {
    return null
  }
}


const HealthSection = (props: Props) => {
  const { zalo } = props

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 6 ,position: 'relative' }}>
              <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
               Zalo
              </Typography>
              <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                <OptionsMenu
                  options={['Edit', 'Delete']}
                  iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
                />
              </Box>
              {renderList(zalo)}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HealthSection
