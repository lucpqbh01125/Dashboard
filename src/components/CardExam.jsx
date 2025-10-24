import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Status from "./Status";
import Level from "./Level";

export default function CardExam({
  level = "Dễ",
  status = "Chưa làm",
  statusColor = "#8c8c8c",
  levelColor = "#1CB0F6",
  // statusTextColor = "#888",
  levelBorderColor = "#77D0FA",
  levelBackground = "#FFFFFF",
  levelWidth = "80px",
  levelHeight = "36px",
  // statusBgColor = "#8C8C8C",
  levelTextSx = {},
}) {
  return (
    <Box
      style={{
        /* /*đây là form tổng*/
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 16px",
        gap: "16px",
        margin: "0 auto",
        width: "360px",
        height: "292px",
        borderRadius: "12px",
        backgroundColor: "#969191ff",
        boxShadow:
          "0px 2px 3px rgba(0, 0, 0, 0.04), 0px 4px 12px rgba(20, 20, 21, 0.03)",
        boxSizing: "border-box",
      }}
    >
      <Box
        style={{
          /* {/*đây là content*/
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          justifyContent: "space-between",
          width: "328px",
          height: "244px",
          gap: "33px",
          boxSizing: "border-box",
        }}
      >
        <Box
          style={{
            /* đây là form above */
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            gap: "6px",
            margin: "0 auto",
            width: "328px",
            height: "78px",
          }}
        >
          <Box
            style={{
              /* đây là  title */ width: "328px",
              height: "36px",
              fontFamily: "Metropolis",
              fontSize: "28px",
              lineHeight: "36px",
              fontWeight: 700,
              textAlign: "justify",
              color: "#000000",
            }}
          >
            {" "}
            Toán 5 - Chủ đề 1
          </Box>
          <Box
            style={{
              /* đây là  level + status */ display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px",
              gap: "18px",
              width: "328px",
              height: "36px",
            }}
          >
            <Status label={status} textColor={statusColor} />
            <Level
              label={level}
              textColor={levelColor}
              borderColor={levelBorderColor}
              background={levelBackground}
              width={levelWidth}
              height={levelHeight}
              textSx={levelTextSx}
            />
          </Box>
        </Box>
        <Box
          style={{
            /*Đây là form below*/
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            gap: "16px",
            margin: "0 auto",
            width: "328px",
            height: "116px",
          }}
        >
          <Box
            style={{
              /*Day la time*/
              display: "flex",
              flexDirection: "column",
              padding: "0px",
              gap: "12px",
              width: "178px",
              height: "60px",
              alignItems: "flex-start",
            }}
          >
            <Box
              style={{
                /* time + survey */
                display: "flex",
                flexDirection: "row",
                padding: "0px",
                gap: "25px",
                alignItems: "center",
                width: "178px",
                height: "24px",
              }}
            >
              <Box
                style={{
                  /*day la question */
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  gap: "4px",
                  width: "75px",
                  height: "24px",
                }}
              >
                <Box
                  style={{
                    /* Day la survey */
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ width: "16px", height: "20px" }}
                  >
                    docs
                  </span>
                </Box>
                <Box
                  style={{
                    /* Day la title */
                    width: "47px",
                    height: "20px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "justify",
                    color: "#6E6E6E",
                    fontWeight: 500,
                  }}
                >
                  30 câu
                </Box>
              </Box>
              <Box
                style={{
                  /* Day la time left*/
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  gap: "4px",
                  width: "78px",
                  height: "24px",
                }}
              >
                <Box
                  style={{
                    /* Day la clock */
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ width: "21.3px", height: "19.65px" }}
                  >
                    Alarm
                  </span>
                </Box>
                <Box
                  style={{
                    /* Day la title-clock */
                    width: "50px",
                    height: "20px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "justify",
                    color: "#6E6E6E",
                    fontWeight: 500,
                  }}
                >
                  15 phút
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                /*Day la date */
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                gap: "4px",
                width: "109px",
                height: "24px",
              }}
            >
              <Box
                style={{
                  /* Day la calendar */
                  width: "24px",
                  height: "24px",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ width: "18px", height: "20px" }}
                >
                  Alarm
                </span>
              </Box>
              <Box
                style={{
                  /* Day la time-date */
                  width: "81px",
                  height: "20px",
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "justify",
                  color: "#6E6E6E",
                  fontWeight: 500,
                }}
              >
                20/9/2025
              </Box>
            </Box>
          </Box>
          <Button
            style={{
              /* Day la button */
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 16px",
              gap: "12px",
              width: "328px",
              height: "40px",
              backgroundColor: "#FA9300",
              boxShadow: "0px 4px 0px #D98000",
              borderRadius: "12px",
              cursor: "pointer",
              border: "none",
            }}
          >
            {" "}
            <Typography
              style={{
                width: "auto",
                height: "12px",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "16px",
                display: "flex",
                alignItems: "center",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              BẮT ĐẦU LÀM BÀI
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
