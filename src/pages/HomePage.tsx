import { FC } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const HomePage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "75px 100px",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255,255,255,0.73)",
          fontSize: "30px",
          fontWeight: "600",
        }}
      >
        Enter your wallet address
      </Typography>
      <Box sx={{ display: "flex", marginTop: "20px", columnGap: "10px" }}>
        <TextField
          sx={{
            width: "700px",
            backgroundColor: "rgba(80,80,80,0.29)",
            input: { color: "white" },
          }}
          fullWidth
        />
        <Button
          sx={{
            color: "white",
            backgroundColor: "rgba(80,80,80,0.29)",
            width: "90px",
            fontSize: "13px",
            border: "2px solid rgb(75,75,75)",
            "&:hover": {
              backgroundColor: "rgba(105,105,105,0.29)",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
