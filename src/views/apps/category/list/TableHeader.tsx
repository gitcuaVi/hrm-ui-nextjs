// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, toggle, value } = props
  const { t } = useTranslation()

  // Hàm làm mới bộ lọc
  const handleRefresh = () => {
    handleFilter('') // Reset giá trị tìm kiếm
  }

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button sx={{ mb: 2 }} onClick={toggle} variant='contained' color='primary'>
        <Icon icon='mdi:plus' fontSize={20} style={{ marginRight: 5 }} />
        {t('Add New')}
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder={String(t('Search'))}
          onChange={e => handleFilter(e.target.value)}
        />

        <Button sx={{ mb: 2 }} onClick={handleRefresh} variant='contained'>
          <Icon icon='mdi:refresh' fontSize={20} style={{ marginRight: 5 }} />
          {t('Refresh')}
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
