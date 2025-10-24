import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import "@/styles/AdminLayout.css";

function AdminLayout() {
  return (
    <Box className="admin-layout">
      <Sidebar className="sidebar" />
      <Box className="main-content">
        <Header className="header" />
        <Box className="page-content">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminLayout;
