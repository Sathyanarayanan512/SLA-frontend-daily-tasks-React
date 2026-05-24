import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";

function MuiRadioGroup(){
    const [gender, setGender] = useState('');
    return (
        <>
        
            <FormControl>
                <FormLabel>Select a gender : </FormLabel>
                <RadioGroup
                    onChange={(e)=>setGender(e.target.value)}>
                
                <FormControlLabel
                    label='Male'
                    value='Male'
                    control={<Radio/>}>
                </FormControlLabel>
                <FormControlLabel
                    label='Female'
                    value='Female'
                    control={<Radio/>}>
                </FormControlLabel>
                </RadioGroup>
            </FormControl>
            <Typography>
                The Selected gender is {gender}
            </Typography>
            
        </>
    );
}

export default MuiRadioGroup;