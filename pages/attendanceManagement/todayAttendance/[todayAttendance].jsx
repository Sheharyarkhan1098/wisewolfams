import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../../src/components/common/pageTitle";
import AttandanceTable from "../../../src/components/attendanceList/attandanceTable";
import { clientAdmin, manager } from '../../../http/apis';
import { get } from '../../../http/httpCalls';

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
}));

const TodayAttendance = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const entity = router.query.todayAttendance;
  const [data, setData] = useState(null);
  const userType = cookie.get('userType');
  let getAtendanceApi = clientAdmin.getAttendanceByClient;
  if( userType === 'Manager'){
    getAtendanceApi = manager.getAttendanceByManager;
  }

  useEffect(() => {
    if (!isUser) router.push("/auth");
    get(getAtendanceApi)
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    }) 
  }, [isUser]);

  if (!isUser) return null;
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Attendance List of Today"} />
        <Grid container className={classes.content}>
          {data && (
          <AttandanceTable data={data.filter(d => d.entity_type === entity)} entityType={entity} isTodayAttendance={true} />
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default TodayAttendance;
