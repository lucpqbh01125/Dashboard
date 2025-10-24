import React from "react";
import { Box, Typography } from "@mui/material";

export default function Level({
  label = "Dễ",
  width = "80px",
  height = "36px",
  padding = "8px 12px",
  borderWidth = "1px",
  borderStyle = "solid",
  borderColor = "#77D0FA",
  borderRadius = "40px",
  background = "#FFFFFF",

  textSx = {},
  fontSize = "14px",
  fontWeight = 500,
  fontFamily = "Inter",
  textColor = "#1CB0F6",
  lineHeight = "20px",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width,
        height,
        padding,
        background,
        border: `${borderWidth} ${borderStyle} ${borderColor}`,
        borderRadius,
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{
          color: textColor,
          fontSize,
          fontWeight,
          fontFamily,
          lineHeight,
          textAlign: "center",
          width: "auto", 
          height: "auto",
          ...textSx, 
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
