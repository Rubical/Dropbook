import { FC } from "react";
import style from "./ProgressBarTotal.module.css";
import { IAirdropProject } from "../../../types/types";

type TypeProgressBar = Pick<
  IAirdropProject,
  "transactionCount" | "bridgedAmount" | "bridgedTarget" | "transactionTarget"
>;

const ProgressBarTotal: FC<TypeProgressBar> = ({
  transactionCount,
  bridgedAmount,
  bridgedTarget,
  transactionTarget,
}) => {
  return (
    <div className={style.progressBar}>
      <div
        className={style.filler}
        style={{
          width:
            150 -
            ((transactionCount / transactionTarget +
              bridgedAmount / bridgedTarget) /
              2) *
              150 +
            "px",
        }}
      />
    </div>
  );
};

export default ProgressBarTotal;