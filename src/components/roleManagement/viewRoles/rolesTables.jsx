import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./tableHeader";
import TableBodyContent from "./tableBodyContent";

const RolesTable = ({data}) => {
  return (
    <Grid item container>
      <TableHeader />
      <TableBodyContent data={data} />
    </Grid>
  );
};

export default RolesTable;
