import Link from "next/link";
import { Button, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <Box p={6}>
      {/* Phần Access Control */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Access Control")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Link href="/apps/category/accesscontrol/list/" passHref>
            <Button variant="contained" color="primary">{t("Users")}</Button>
          </Link>
          <Link href="/apps/category/accesscontrol/listadmin/" passHref>
            <Button variant="contained" color="primary">{t("Admins")}</Button>
          </Link>
          <Link href="/apps/category/accesscontrol/role/" passHref>
            <Button variant="contained" color="primary">{t("Roles")}</Button>
          </Link>
          <Link href="/apps/category/accesscontrol/permissions/" passHref>
            <Button variant="contained" color="primary">{t("Permissions")}</Button>
          </Link>
          <Link href="/apps/category/accesscontrol/activity/" passHref>
            <Button variant="contained" color="primary">{t("Activity")}</Button>
          </Link>
          <Link href="/apps/category/accesscontrol/notifications/" passHref>
            <Button variant="contained" color="primary">{t("Notifications")}</Button>
          </Link>F
          <Link href="/apps/category/accesscontrol/configs/" passHref>
            <Button variant="contained" color="primary">{t("Configs")}</Button>
          </Link>
          <Link href="/apps/category/accesscontrol/zaloconfig/" passHref>
            <Button variant="contained" color="primary">{t("Zalo config")}</Button>
          </Link>
        </Box>
      </Box>

      {/* Phần Quản lý tổ chức */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Organization Management")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">{t("Company Type")}</Button>
          <Button variant="contained" color="primary">{t("Company Information")}</Button>
          <Button variant="contained" color="primary">{t("Projects")}</Button>
          <Button variant="contained" color="primary">{t("Position Information")}</Button>
          <Button variant="contained" color="primary">{t("Department Group Information")}</Button>
          <Button variant="contained" color="primary">{t("Department Information")}</Button>
          <Button variant="contained" color="primary">{t("Industry")}</Button>
          <Button variant="contained" color="primary">{t("Functions")}</Button>
        </Box>
      </Box>

      {/* Salary Management Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Salary Management")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">{t("Bank")}</Button>
          <Button variant="contained" color="primary">{t("Salary Scale")}</Button>
          <Button variant="contained" color="primary">{t("Salary Levels")}</Button>
          <Button variant="contained" color="primary">{t("Timekeeping Types")}</Button>
          <Button variant="contained" color="primary">{t("Work Shift Groups")}</Button>
          <Button variant="contained" color="primary">{t("Work Shifts")}</Button>
          <Button variant="contained" color="primary">{t("Timekeeping Table Configuration")}</Button>
        </Box>
      </Box>

      {/* Category Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Categories")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">{t("Levels")}</Button>
          <Button variant="contained" color="primary">{t("Nationality")}</Button>
          <Button variant="contained" color="primary">{t("Religion")}</Button>
          <Button variant="contained" color="primary">{t("Address")}</Button>
          <Button variant="contained" color="primary">{t("Contract Types")}</Button>
          <Button variant="contained" color="primary">{t("Contract Templates")}</Button>
          <Button variant="contained" color="primary">{t("Contract Content")}</Button>
        </Box>
      </Box>

      {/* Reports Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Reports")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">{t("Tax Report (Declaration)")}</Button>
          <Button variant="contained" color="primary">{t("Detailed Individual Statistics (05-1_BK-TNCN)")}</Button>
          <Button variant="contained" color="primary">{t("Total Tax Rate (05-2_BK-TNCN)")}</Button>
          <Button variant="contained" color="primary">{t("Dependents (05-3_BK-TNCN)")}</Button>
          <Button variant="contained" color="primary">{t("Labor Usage Report")}</Button>
          <Button variant="contained" color="primary">{t("Unemployment Insurance Participation Report")}</Button>
        </Box>
      </Box>

      {/* Files Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Files")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">{t("Employee Attendance Table")}</Button>
          <Button variant="contained" color="primary">{t("Employee Salary Table")}</Button>
          <Button variant="contained" color="primary">{t("Business Performance")}</Button>
          <Button variant="contained" color="primary">{t("Employee List")}</Button>
        </Box>
      </Box>

      {/* Trending Zalo Chatbot Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: 2, p: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("Trending Zalo Chatbot")}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">{t("Message Sending Time")}</Button>
          <Button variant="contained" color="primary">{t("Create Image")}</Button>
          <Button variant="contained" color="primary">{t("Salary Config")}</Button>
        </Box>
      </Box>



    </Box>
  );
}
