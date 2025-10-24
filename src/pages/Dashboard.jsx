import React from "react";
import { Box } from "@mui/material";
import ProgressCard from "@/components/ProgressCard";
import Ads from "@/components/Ads";
import "@/styles/Dashboard.css";

function Dashboard() {

  return (
    <Box className="dashboard-container">
      <Box className="content-left">

      </Box>

      <Box className="content-right">
        <ProgressCard />
        <Ads />
      </Box>
    </Box>
  );

}

export default Dashboard;
