import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Icon from 'src/@core/components/icon'
import { useTranslation } from 'react-i18next'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  const { handleFilter, toggle, value } = props
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState(value)

  // Cập nhật giá trị nhập vào
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  // Kích hoạt tìm kiếm
  const handleSearch = () => {
    handleFilter(searchValue)
  }

  // Reset tìm kiếm
  const handleRefresh = () => {
    setSearchValue('')
    handleFilter('')
  }

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={searchValue}
          sx={{ mr: 2, mb: 2 }}
          placeholder={String(t('Search'))}
          onChange={handleChange}
        />

        <Button sx={{ mr: 2, mb: 2 }} size="small" onClick={handleSearch} variant='contained'>
          <Icon icon='mdi:magnify' fontSize={20} style={{ marginRight: 5 }} />
          {t('Search')}
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
