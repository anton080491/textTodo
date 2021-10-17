import React, { FC, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

const MyForm: FC = () => {

    const [age, setAge] = useState<string>('');
    console.log(age);
    return (
        <React.Fragment>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={(event) => setAge(event.target.value)}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </React.Fragment>
    )
}

export default MyForm;