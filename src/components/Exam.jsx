import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Status from "./Status";
import Level from "./Level";
import CardExam from "@/components/CardExam";

export default function Exam() {
  return (
    <Box
      sx={{
        /**Kiem tra thuong xuyen */
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "16px",
        width: "1136px",
        height: "344px",
        backgroundColor: "#923131ff",
      }}
    >
      <Box
        sx={{
          /**header */ display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px",
          gap: "16px",
          width: "1136px",
          height: "36px",
          backgroundColor: "#94b69eff",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#29ca77ff",
            width: "317px",
            height: "36px",
            margin: "0 auto",
            padding: "0px",
            alignItems: "flex-start",
            flexDirection: "column",
            display: "flex",
          }}
        >
          Kiểm tra thường xuyên
        </Box>
        <Box
          sx={{
            width: "62px",
            height: "16px",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#FFA82B",
            backgroundColor: "#f32323ff",
          }}
        >
          Xem tất cả
        </Box>
      </Box>
      <Box
        sx={{
          /* boc cac card */ width: "1136px",
          height: "292px",
          padding: "0px",
          gap: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardExam />
        <CardExam
        
          level="Trung bình"
          levelColor="#FFC800"
          levelBorderColor="#ffc800"
          levelWidth="96px"
          levelHeight="32px"
          levelTextSx={{ width: "70px", height: "20px" }}
        />
        <CardExam />
      </Box>
    </Box>
  );
}
