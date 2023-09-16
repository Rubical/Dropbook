import { FC } from "react";
import { IAirdropProject } from "../../../../types/types";

type TypeProgressBarLinear = Pick<
  IAirdropProject,
  "transactionCount" | "transactionTarget" | "bridgedTarget" | "bridgedAmount"
>;

const ProgressBarLinear: FC<TypeProgressBarLinear> = ({
  transactionCount,
  transactionTarget,
  bridgedTarget,
  bridgedAmount,
}) => {
  return (
    <div
      style={{
        height: "12px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "60%",

          background: "linear-gradient(to right, #d95551, #efad4f, #5db75d)",
          textAlign: "right",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${
              (transactionCount / transactionTarget +
                bridgedAmount / bridgedTarget) /
                2 >
              1
                ? 0
                : 100 -
                  ((transactionCount / transactionTarget +
                    bridgedAmount / bridgedTarget) /
                    2) *
                    100
            }%`,
            height: "100%",
            float: "right",
            backgroundColor: "rgb(224, 224, 222)",
            marginRight: "-2px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBarLinear;
