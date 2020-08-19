import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./tableHeader";
import TableBodyContent from "./tableBodyContent";

const AttandanceTable = () => {
  return (
    <Grid item container>
      <TableHeader />
      <TableBodyContent />
    </Grid>
  );
};

export default AttandanceTable;
