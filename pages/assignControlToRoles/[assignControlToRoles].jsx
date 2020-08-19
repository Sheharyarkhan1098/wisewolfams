import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import RoleTitle from "../../src/components/userControls/roleTitle";
import ControlsTable from "../../src/components/userControls/controlsTable";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    paddingLeft: 260,
    // marginRight: -30,
    fontWeight: 700,
  },
  content: {
    background: "#fff",
    borderRadius: 6,
    padding: 30,
  },
}));

const AssignControlToRoles = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const [dashboard, setDashboard] = useState({
    tab: true,
    create: true,
    view: true,
    modify: true,
    remove: true,
    active: true,
    inactive: true,
    all: true,
  });
  const [role, setRole] = useState({
    tab: true,
    create: true,
    view: true,
    modify: true,
    remove: true,
    active: true,
    inactive: true,
    all: true,
  });
  
  const router = useRouter();
  const userType = router.query.assignControlToRoles;
  useEffect(() => {
    if (!isUser) router.push("/auth");
  }, [isUser]);
  const handleSubmit = () => {
    console.log("User Type", userType);
    console.log("data", dashboard, role);
  }

  const handleChange = (moduleName) => e => {
    console.log("checked", moduleName)
    if(moduleName === 'Dashboard'){
    const newdashboard = {...dashboard};
    newdashboard[e.target.name] = e.target.checked;
    setDashboard(newdashboard);
    }
    if(moduleName === 'Roles Management'){
    const newrole = {...role};
    newrole[e.target.name] = e.target.checked;
    setRole(newrole);
    }
  }

  // const handleChange = () => {
  //   console.log("checked")
  // }

  if (!isUser) return null;
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Assign Control to Roles"} />
        <Grid container className={classes.content}>
          <RoleTitle data={userType} handleSubmit={handleSubmit} />
          <Grid item container style={{ marginTop: 50 }}>
            <ControlsTable dashboard={dashboard} role={role} handleChange={handleChange} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AssignControlToRoles;
