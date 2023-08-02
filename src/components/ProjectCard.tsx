import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import StyledCard from "./UI/Card/StyledCard";
import { IAirdropProject } from "../types/types";
import { Box, Slider } from "@mui/material";
import ProgressBar from "./UI/ProgressBar/ProgressBar";

const ProjectCard: FC<IAirdropProject> = ({
  name,
  logo,
  transactionCount,
  transactionTarget,
  bridgedAmount,
  bridgedTarget,
  updateTime,
}) => {
  return (
    <StyledCard>
      <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
        <CardMedia
          sx={{ width: "50px" }}
          component="img"
          alt="logo"
          image={logo}
        />
      </Box>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "lightgray",
            marginTop: "10px",
          }}
        >
          Last time activity - {updateTime}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            alignSelf: "flex-start",
            color: "lightgray",
            marginLeft: "8px",
          }}
        >
          Transaction count
        </Typography>
        <Slider
          aria-valuetext="Transaction count"
          defaultValue={transactionCount}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={transactionTarget}
          marks
          sx={{ width: "200px" }}
        />
        <Typography
          sx={{
            fontSize: "13px",
            alignSelf: "flex-start",
            color: "lightgray",
          }}
        >
          Bridged amount
        </Typography>
        <Slider
          aria-valuetext="Bridged amount"
          defaultValue={bridgedAmount}
          valueLabelDisplay="auto"
          step={bridgedTarget / 200}
          min={0}
          max={bridgedTarget}
          disabled
          sx={{ width: "200px" }}
        />
        <Button
          sx={{
            border: "2px solid",
            backgroundColor: "rgba(63,63,63,0.2)",
            fontWeight: "600",
            marginTop: "20px",
            color: "lightgray",
          }}
          size="small"
        >
          Get details
        </Button>
      </CardActions>
      <ProgressBar
        transactionCount={transactionCount}
        transactionTarget={transactionTarget}
        bridgedAmount={bridgedAmount}
        bridgedTarget={bridgedTarget}
      />
    </StyledCard>
  );
};

export default ProjectCard;
