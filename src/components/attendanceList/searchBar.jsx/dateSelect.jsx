import React from "react";
import { makeStyles } from "@material-ui/core";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  select: {
    height: 50,
    width: 200,
  },
}));

const dateItems = (month) => {
  dates = [];
  let days = monthDays[month - 1];
  if (month === 2) {
    const year = new Date().getFullYear();
    if (year % 4 === 0) days = 29;
  }
  for (let i = 0; i <= days; i++) {
    dates.push(<MenuItem value={i}>{i}</MenuItem>);
  }
};

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let dates = [];

const DateSelect = ({ month, handleChange }) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" style={{ marginLeft: 20 }}>
      <InputLabel id="demo-simple-select-outlined-label">
        Select Date
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        //   value={age}
        name="dateQuery"
        onChange={handleChange(month)}
        label="Select Month"
        className={classes.select}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dateItems(month)}
        {dates.map((d) => d)}
      </Select>
    </FormControl>
  );
};

export default DateSelect;
