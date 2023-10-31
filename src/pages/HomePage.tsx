import {ChangeEvent, FC, useState} from "react";
import {isAddress} from 'web3-validator';
import {Alert, AlertTitle, Box, Button, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAddress} from "../hooks/useAddress";
import {useActions} from "../hooks/useActions";

const HomePage: FC = () => {
    const navigate = useNavigate()
    const address = useAddress()
    const {changeAddress} = useActions()
    const [visibility, changeVisibility] = useState('hidden')

    function searchAddress() {
        if (!isAddress(address)) {
            changeVisibility('visible')
             setTimeout(()=> {
                changeVisibility('hidden')
            }, 5000)
        }
        else {
            changeVisibility('hidden')
            navigate(`/dashboard/${address}`)
        }
    }

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: 'calc(100vh - 75px)',
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
            <Box sx={{display: "flex", marginTop: "20px", columnGap: "10px"}}>
                <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    changeAddress(e.target.value)
                }}

                           sx={{
                               width: "700px",
                               backgroundColor: "rgba(80,80,80,0.29)",
                               input: {color: "white"},
                           }}
                           fullWidth
                />
                <Button
                    onClick={() => {
                        searchAddress()
                    }}
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
            <Alert onClose={() => {
                changeVisibility('hidden')
            }} severity="error" sx={{visibility: visibility, position: 'absolute', top: '30px', right: '30px'}}>
                <AlertTitle>Error</AlertTitle>
                Invalid address <strong>check it out!</strong>
            </Alert>
        </Box>
    );
};

export default HomePage;
