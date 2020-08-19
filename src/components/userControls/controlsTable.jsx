import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./tableHeader";
import TableBodyContent from "./tableBodyContent";

const ControlsTable = ({dashboard, role, handleChange}) => {
  return (
    <Grid item container>
      <TableHeader />
      <TableBodyContent dashboard={dashboard} role={role} handleChange={handleChange} />
    </Grid>
  );
};

export default ControlsTable;
