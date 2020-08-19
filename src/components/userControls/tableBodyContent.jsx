import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Grid } from "@material-ui/core";
import TableRowContent from "./tableRowContent";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  content: {
    fontSize: 16.29,
    fontWeight: 500,
  },
}));

const TableBodyContent = ({dashboard, role, handleChange}) => {
  const classes = useStyles();
  // const [checked, setChecked] = useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <Grid container className={classes.root}>
      <TableRowContent moduleName={"Dashboard"} moduleValues={dashboard} handleChange={handleChange} />
      <TableRowContent moduleName={"Roles Management"} moduleValues={role} handleChange={handleChange} />
      {/* <TableRowContent moduleName={"Roles & Permission"} moduleValues={roleAndPermission} handleChange={handleChange} />
      <TableRowContent moduleName={"Permission Management"} moduleValues={permission} handleChange={handleChange} /> */}
    </Grid>
  );
};

export default TableBodyContent;
