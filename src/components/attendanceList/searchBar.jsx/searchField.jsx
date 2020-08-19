import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Container,
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    paddingLeft: 260,
    fontWeight: 700,
  },
  content: {
    background: "#fff",
    borderRadius: 6,
    padding: 30,
  },
  search: {
    background: "#fafafa",
    height: 50,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    color: "#9f9f9f",
  },
  select: {
    height: 50,
    width: 200,
  },
}));

const SearchFeild = ({ label, searchQuery, handleChange, name }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      alignItems="center"
      className={classes.search}
      style={{ marginLeft: 10 }}
    >
      <Grid item sm={2}>
        <SearchIcon />
      </Grid>
      <Grid item sm={10}>
        <InputBase
          placeholder={label}
          value={searchQuery}
          name={name}
          onChange={handleChange}
          fullWidth={true}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchFeild;
