import {FC} from "react";
import {Box, Typography} from "@mui/material";
import logo from "./../assets/logo.png";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/useActions";

const Header: FC = () => {
    const {clearAddress} = useActions()
    return (
        <Box
            sx={{
                height: "75px",
                width: "100%",
                backgroundColor: 'rgb(17,17,17)',
                boxShadow:
                    "rgba(65, 65, 65, 0.58) 1px 1px 4px inset, rgba(65, 65, 65, 0.58) -1px -1px 4px inset",
                display: "flex",
                alignItems: "center",
                padding: "0px 100px",
            }}
        >
            <Link to={"/"} onClick={() => {
                clearAddress()
            }} style={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" style={{width: "18px", height: "21px"}}/>
                <Typography
                    sx={{
                        color: "rgba(255,255,255,0.73)",
                        fontSize: "21px",
                        fontWeight: "600",
                        marginLeft: "1px",
                        letterSpacing: '0.7px'
                    }}
                >
                    ROPBOOK
                </Typography>
            </Link>
        </Box>
    );
};

export default Header;
