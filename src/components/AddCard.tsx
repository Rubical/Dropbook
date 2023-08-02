import { FC } from "react";
import StyledCard from "./UI/Card/StyledCard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

const AddCard: FC = () => {
  return (
    <StyledCard>
      <Button
        sx={{
          width: "100px",
          height: "100px",
          padding: "0",
          "&:hover": { backgroundColor: "transparent" },
        }}
        disableRipple={true}
      >
        <AddBoxIcon sx={{ width: "100%", height: "100%" }} />
      </Button>
    </StyledCard>
  );
};

export default AddCard;
