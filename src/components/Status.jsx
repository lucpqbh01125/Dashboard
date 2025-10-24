// components/Status.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Status({
  label = "Chưa làm",

  // Container (bọc)
  width = "88px",
  height = "36px",
  padding = "8px 12px",
  gap = "10px",
  background,        
  bgColor = "#F2F2F2", 
  borderRadius = "40px",
  textColor = "#8C8C8C",
  fontWeight =500,
  fontSize = "14px",
  lineHeight = "20px",
  textAlign = "justify",

  // Override
  containerSx = {},
  textSx = {},
}) {
  const resolvedBg = background ?? bgColor;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding,
        gap,
        width,
        height,
        background: resolvedBg,
        borderRadius,
        boxSizing: "border-box",
        flex: "none",
        order: 0,
        flexGrow: 0,
        ...containerSx,
      }}
    >
      <Typography
        sx={{
          width: "auto",      
          height: "20px",
          fontWeight,
          fontSize,
          lineHeight,
          textAlign,
          color: textColor,
          flex: "none",
          order: 0,
          flexGrow: 0,
          ...textSx,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
