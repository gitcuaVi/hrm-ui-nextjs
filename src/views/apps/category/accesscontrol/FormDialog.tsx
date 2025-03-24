import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTranslation } from 'react-i18next'


interface Field {
  name: string
  label: string
  type?: string
  options?: { label: string; value: string }[] // Nếu là select
}

interface DynamicFormDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  fields: Field[]
  defaultValues: Record<string, any>
  onSubmit: (data: Record<string, any>) => void
}

const DynamicFormDialog = ({ open, setOpen, title, fields, defaultValues, onSubmit }: DynamicFormDialogProps) => {
  const [formData, setFormData] = useState(defaultValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSubmit(formData)
    setOpen(false)
  }
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
      <DialogTitle>{t(title)}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {fields.map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              {field.options ? (
                <FormControl fullWidth>
                  <InputLabel>{t(field.label)}</InputLabel>
                  <Select name={field.name} value={formData[field.name] || ''} onChange={handleSelectChange}>
                    {field.options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {t(option.label)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  fullWidth
                  label={t(field.label)}
                  name={field.name}
                  type={field.type || 'text'}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="secondary">
          {t('Cancel')} {/* Dịch button Cancel */}
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          {t('Save')} {/* Dịch button Save */}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DynamicFormDialog
