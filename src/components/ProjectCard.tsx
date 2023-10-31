import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {FC} from "react";
import StyledCard from "./UI/Card/StyledCard";
import {IAirdropProject} from "../types/types";
import {Box} from "@mui/material";
import CircularProgressBar from "./UI/ProgressBar/ProgressBarCircular/ProgressBarCircular";
import ProgressBarLinear from "./UI/ProgressBar/ProgressBarLinear/ProgressBarLinear";
import {useAddress} from "../hooks/useAddress";

const ProjectCard: FC<IAirdropProject> = ({
                                              name,
                                              logo,
                                              transactionCount,
                                              transactionTarget,
                                              bridgedAmount,
                                              bridgedTarget,
                                              updateTime,
                                              method
                                          }) => {
    const address = useAddress()
    return (
        <StyledCard>
            <Box sx={{height: "50px", display: "flex", alignItems: "center"}}>
                <CardMedia
                    sx={{width: "50px"}}
                    component="img"
                    alt="logo"
                    image={logo}
                />
            </Box>
            <CardContent
                sx={{display: "flex", flexDirection: "column", alignItems: "center"}}
            >
                <Typography
                    sx={{fontWeight: "600"}}
                    gutterBottom
                    variant="h5"
                    component="div"
                >
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
                sx={{display: "flex", flexDirection: "column", marginBottom: "10px"}}
            >
                <Box sx={{display: "flex", columnGap: "30px", marginBottom: "20px"}}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
                                fontWeight: "600",
                                alignSelf: "flex-start",
                                color: "lightgray",
                                marginBottom: "10px",
                            }}
                        >
                            Transactions
                        </Typography>
                        <CircularProgressBar
                            selectedValue={transactionCount}
                            maxValue={transactionTarget}
                            backgroundColor={"black"}
                            textColor="white"
                            activeStrokeColor="#5db75d"
                            inactiveStrokeColor={"white"}
                            radius={30}
                            valueFontSize={12}
                            strokeWidth={5}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
                                fontWeight: "600",
                                alignSelf: "flex-start",
                                color: "lightgray",
                                marginBottom: "10px",
                                marginLeft: '4px'
                            }}
                        >
                            Bridged
                        </Typography>
                        <CircularProgressBar
                            selectedValue={bridgedAmount}
                            maxValue={bridgedTarget}
                            backgroundColor={"black"}
                            textColor="white"
                            activeStrokeColor="#5db75d"
                            inactiveStrokeColor={"white"}
                            radius={30}
                            valueFontSize={12}
                            strokeWidth={5}
                            additionalMark={"$"}
                        />
                    </Box>
                </Box>
                <Button onClick={() => {
                    method(address)
                }}
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
            <ProgressBarLinear
                transactionCount={transactionCount}
                transactionTarget={transactionTarget}
                bridgedAmount={bridgedAmount}
                bridgedTarget={bridgedTarget}
            />
            <Typography sx={{fontSize: '13px', marginTop: '3px'}}>Your airdrop chances</Typography>
        </StyledCard>
    );
};

export default ProjectCard;
