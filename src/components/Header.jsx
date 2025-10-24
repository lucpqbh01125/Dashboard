import React from "react";
import { Box, Typography } from "@mui/material";
import "@/styles/Header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const DEFAULT_HEADER_DATA = {
  leftItems: [
    { icon: "src/assets/images/lua.png", count: 8 },
    { icon: "src/assets/images/da.png", count: 15 }
  ],
  rightItems: {
    notificationIcon: "src/assets/images/chuong.png",
    avatar: "src/assets/images/covn.png"
  }
};

const Header = ({ 
  leftItems = DEFAULT_HEADER_DATA.leftItems,
  rightItems = DEFAULT_HEADER_DATA.rightItems
}) => {
  return (
    <Box className="header-container">
      <Box className="header-wrapper">
        <Box className="header-left">
          {leftItems.map((item, index) => (
            <Box key={index} className="header-logo">
              <img src={item.icon} alt="" />
              <Typography variant="h4" className="login-title">
                {item.count}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="header-right">
          <Box className="header-right-logo">
            <img src={rightItems.notificationIcon} alt="" />
            <img className="img-tv" src={rightItems.avatar} alt="" />
          </Box>
          <Box className="header-right-user">
            <Box className="header-icon-img"></Box>
            <ExpandMoreIcon className="sidebar-icon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
