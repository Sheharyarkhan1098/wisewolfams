import React from "react";
import { Grid } from "@material-ui/core";
import TableHeader from "./tableHeader";
import TableBodyContent from "./tableBodyContent";

const AttandanceTable = ({entityType, data, isTodayAttendance}) => {
  return (
    <Grid item container>
      <TableHeader entityType={entityType}/>
      <TableBodyContent data={data} isTodayAttendance={isTodayAttendance} />
    </Grid>
  );
};

export default AttandanceTable;
