import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  select: {
    height: 50,
    width: 200,
  },
}));

const monthItem = (name, value) => {
  return <MenuItem value={value}>{name}</MenuItem>;
};

const months = [
  { name: "January", value: "01" },
  { name: "February", value: '02' },
  { name: "March", value: '03' },
  { name: "April", value: '04' },
  { name: "May", value: '05' },
  { name: "June", value: '06' },
  { name: "July", value: '07' },
  { name: "August", value: '08' },
  { name: "September", value: '09' },
  { name: "October", value: '10' },
  { name: "November", value: '11' },
  { name: "December", value: '12' },
];

const MonthSelect = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" style={{ marginLeft: 20 }}>
      <InputLabel id="demo-simple-select-outlined-label">
        Select Month
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        //   value={age}
        onChange={(e) => handleChange(e.target.value)}
        label="Select Month"
        className={classes.select}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {months.map((month) => monthItem(month.name, month.value))}
      </Select>
    </FormControl>
  );
};

export default MonthSelect;
