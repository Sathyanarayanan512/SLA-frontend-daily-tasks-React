import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { useState } from "react";

function MuiModeToggle(props){

    const[dark, setDark] = useState(false)
    return (
        <>
            <Box sx={{backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <FormControlLabel
                    control={<Switch
                        checked={dark}
                        onChange={(e)=>setDark(e.target.checked)}/>}
                    label="Dark Mode">
                </FormControlLabel>
                <Typography>
                   Switched to {dark ? "Dark" : "Light"} Mode
                </Typography><br/><br/>

                {props.children}
            </Box>
        </>
    );
}

export default MuiModeToggle;