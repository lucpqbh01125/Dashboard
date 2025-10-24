import React from "react";
import { Box, Typography } from "@mui/material";

export default function HeaderExam() {
  return (
    <Box
      sx={{
        width: "1136px",
        height: "64px",
        gap: "16px",
        padding: "0px",
        alignItems: "flex-end",
        flexDirection: "column",
        display: "flex",
        backgroundColor: "#d33232ff",
      }}
    >
      <Box
        sx={{
          width: "123px",
          height: "36px",
          gap: "16px",
          padding: "0px",
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
          backgroundColor: "#8f1313ff",
        }}
      ></Box>
      <Box
        sx={{
          width: "112px",
          height: "48px",
          margin: "0 auto",
          padding: "0px",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          display: "flex",
          backgroundColor: "#66ce4cff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
            gap: "12px",
            width: "48px",
            height: "48px",
            backgroundColor: "#ffdcaa",
            border: "4px solid #ffa82b",
            boxShadow: "0px 4px 0px #FC8002",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ width: "24px", height: "24px" }}>
            <Typography
              sx={{ color: "#ffa82b", width: "18px", height: "15px" }}
            >
              <span className="material-symbols-outlined">width_normal</span>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
            gap: "12px",
            width: "48px",
            height: "48px",
            backgroundColor: "#f2f2f2",
            border: "4px solid #feecca",
            boxShadow: "0px 4px 0px #edb55e",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ width: "24px", height: "24px" }}>
            <Typography
              sx={{ color: "#ffa82b", width: "16,88px", height: "11.15px" }}
            >
              <span className="material-symbols-outlined">
                format_list_bulleted
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
