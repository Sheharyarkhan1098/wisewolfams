import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./orgTable/tableHeader";
import TableBodyContent from "./orgTable/tableBody";

const OrganizationTable = ({ data }) => {
  return (
    <Grid item container>
      <TableHeader />
      <TableBodyContent data={data} />
    </Grid>
  );
};

export default OrganizationTable;
