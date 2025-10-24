import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = 220;

function AdminLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#fafafa",
          p: 3,
          ml: `${drawerWidth}px`,
          mt: "64px", // tránh bị Header đè
        }}
      >
        <Outlet /> {/* 👈 Hiển thị các route con */}
      </Box>
    </Box>
  );
}

export default AdminLayout;
