import { FC, ReactElement } from "react";
import Card from "@mui/material/Card";

interface IStyledCard {
  children: ReactElement | ReactElement[];
}

const StyledCard: FC<IStyledCard> = ({ children }) => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(40,40,40,0.3)",
        color: "white",
        boxShadow:
          "rgba(65, 65, 65, 0.58) 1px 1px 4px inset, rgba(65, 65, 65, 0.58) -1px -1px 4px inset",
        width: "300px",
        height: "420px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 15px",
      }}
    >
      {children}
    </Card>
  );
};

export default StyledCard;
