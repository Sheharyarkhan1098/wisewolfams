import React, { useEffect } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles, TextField, Button, Typography } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import UsersTable from "../../src/components/viewUsers/usersTable";
import PersonalInfo from "../../src/components/userProfile/personalInfo";
import AttandanceTable from "../../src/components/userProfile/attandanceTable";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    paddingTop: 100,
    paddingLeft: 260,
    fontWeight: 700,
  },
  content: {
    background: "#fff",
    borderRadius: 6,
    padding: 30,
  },
}));

const Entity = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  // const { entity, id } = router.query

  useEffect(() => {
    if (!isUser) router.push("/auth");
  }, [isUser]);
  if (!isUser) return null;
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"User Profile"} />
        <Grid container className={classes.content}>
          <PersonalInfo />
        </Grid>
        <Grid container className={classes.content} style={{ marginTop: 30 }}>
          <Grid item container>
            <Typography variant="h6">Attendance of Jun, 2020</Typography>
          </Grid>
          <Grid item container>
            <AttandanceTable />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Entity;
