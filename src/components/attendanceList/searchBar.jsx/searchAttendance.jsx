import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SearchFeild from "./searchField";
import MonthSelect from "./monthSelect";
import DateSelect from "./dateSelect";

// const useStyles = makeStyles((theme) => ({
//   select: {
//     height: 50,
//     width: 200,
//   },
// }));

const SearchAttendance = ({ searchContact, searchQuery, handleChange, handleChangeDate, handleMonthChange, month}) => {
  // const [month, setMonth] = useState("");
  // const handleMonthChange = (month) => {
  //   setMonth(month);
  //   console.log(month);
  // };
  return (
    <Grid item container>
      <Grid item container sm={3}>
        <SearchFeild label={"Search by name"} searchQuery={searchQuery} handleChange={handleChange} name="searchQuery" />
      </Grid>
      <Grid item container sm={3}>
        <SearchFeild label={"Search by contact"} searchQuery={searchContact} handleChange={handleChange} name="searchContact" />
      </Grid>
      <Grid item container sm={3}>
        <MonthSelect handleChange={handleMonthChange} />
      </Grid>
      <Grid item container sm={3}>
        <DateSelect month={month} handleChange={handleChangeDate} />
      </Grid>
    </Grid>
  );
};

export default SearchAttendance;
