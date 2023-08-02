import { FC } from "react";
import { Box, Typography } from "@mui/material";
import logo from "./../assets/logo.png";

const Header: FC = () => {
  return (
    <Box
      sx={{
        height: "70px",
        width: "100%",
        boxShadow:
          "rgba(65, 65, 65, 0.58) 1px 1px 4px inset, rgba(65, 65, 65, 0.58) -1px -1px 4px inset",
        display: "flex",
        padding: "0px 100px",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "40px", height: "50px" }} />
      <Typography
        sx={{
          color: "#867d9a",
          fontSize: "25px",
          marginLeft: "2px",
        }}
      >
        ropbook
      </Typography>
    </Box>
  );
};

export default Header;
