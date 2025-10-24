import React from "react";
import { Box, Typography } from "@mui/material";

export default function FilterBat() {
  return (
    <Box
      sx={{
        width: "1136px",
        height: "56px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",
        gap: "20px",
        backgroundColor: "#bb2a2aff",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "12px 20px",
          gap: "8px",
          margin: "0 auto",
          width: "392px",
          height: "48px",
          borderRadius: "12px",
          border: "2px solid #e6e6e6",
          backgroundColor: "#08b811ff",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0 auto",
          width: "692px",
          height: "56px",
          padding: "0px",
          gap: "16px",
          backgroundColor: "#dbb6b6ff",
        }}
      >
        <Box sx={{
        
        }}></Box>
      </Box>
    </Box>
  );
}
