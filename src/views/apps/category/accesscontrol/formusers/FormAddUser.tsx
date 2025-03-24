// ** React Imports
import { useState } from "react";
import { useTranslation } from "react-i18next";

// ** MUI Imports
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "src/store/apps/user";
import { RootState, AppDispatch } from "src/store";
import { UsersType } from "src/types/apps/userTypes";

interface SidebarAddUserType {
  open: boolean;
  toggle: () => void;
}

interface UserData {
  email: string;
  company: string;
  country: string;
  contact: number;
  fullName: string;
  username: string;
}

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
}));

const schema = yup.object().shape({
  company: yup.string().required(),
  country: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup
    .number()
    .typeError("Contact Number field is required")
    .min(10, (obj) => showErrors("Contact Number", obj.value.length, obj.min))
    .required(),
  fullName: yup
    .string()
    .min(3, (obj) => showErrors("First Name", obj.value.length, obj.min))
    .required(),
  username: yup
    .string()
    .min(3, (obj) => showErrors("Username", obj.value.length, obj.min))
    .required(),
});

const defaultValues = {
  email: "",
  company: "",
  country: "",
  fullName: "",
  username: "",
  contact: Number(""),
};

const AddUserDrawer = (props: SidebarAddUserType) => {
  const { open, toggle } = props;
  const { t } = useTranslation();
  const [plan, setPlan] = useState<string>("basic");
  const [role, setRole] = useState<string>("subscriber");
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.user);
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserData) => {
    if (store.allData.some((u: UsersType) => u.email === data.email || u.username === data.username)) {
      store.allData.forEach((u: UsersType) => {
        if (u.email === data.email) {
          setError('email', {
            message: t('email_exists') as string
          })


        }
        if (u.username === data.username) {
          setError('email', {
            message: t('email_exists') as string
          })

        }
      });
    } else {
      dispatch(addUser({ ...data, role, currentPlan: plan }));
      toggle();
      reset();
    }
  };

  return (
    <Drawer open={open} anchor="right" onClose={toggle} sx={{ "& .MuiDrawer-paper": { width: { xs: 300, sm: 400 } } }}>
      <Header>
        <Typography variant="h6">{t("add_user")}</Typography>
        <IconButton size="small" onClick={toggle} sx={{ color: "text.primary" }}>
          X
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} label={t("full_name")} error={Boolean(errors.fullName)} />
              )}
            />
          </FormControl>
          <Button size="large" type="submit" variant="contained" sx={{ mr: 3 }}>
            {t("submit")}
          </Button>
          <Button size="large" variant="outlined" color="secondary" onClick={toggle}>
            {t("cancel")}
          </Button>
        </form>
      </Box>
    </Drawer>
  );
};

export default AddUserDrawer;