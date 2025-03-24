import DynamicFormDialog from "../FormDialog"

interface EditUserProps {
  open: boolean
  setOpen: (open: boolean) => void
  userData: {
    fullName: string
    username: string
    email: string
    role: string
    status: string
  }
}

const EditUser: React.FC<EditUserProps> = ({ open, setOpen, userData }) => {
  const userFields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'username', label: 'Username' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'role', label: 'Role' },
    {
      name: 'status',
      label: 'Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Pending', value: 'pending' },
        { label: 'Inactive', value: 'inactive' }
      ]
    }
  ]


  const defaultUserData = {
    fullName: userData?.fullName || '',
    username: userData?.username || '',
    email: userData?.email || '',
    role: userData?.role || '',
    status: userData?.status || 'active'
  }

  const handleSave = (data: Record<string, any>) => {
    console.log('Updated User:', data)
    setOpen(false)
  }

  return (
    <DynamicFormDialog
      open={open}
      setOpen={setOpen}
      title="Edit User Information"
      fields={userFields}
      defaultValues={defaultUserData}
      onSubmit={handleSave}
    />
  )
}

export default EditUser
