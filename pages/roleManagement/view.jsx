import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import { getRoles } from "../../http/httpCalls";
import { superAdmin } from "../../http/apis";
import RolesTable from "../../src/components/roleManagement/viewRoles/rolesTables";

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
  TextField: {
    width: "95%",
  },
  btn: {
    marginTop: 30,
    fontSize: 16.29,
    color: "#fff",
  },
}));

const ViewRoles = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const getRolesApi = superAdmin.getRoles;
  const [roles, setRoles] = useState();

  useEffect(() => {
    if (!isUser) router.push("/auth");
    getRoles(getRolesApi)
      .then((res) => {
        setRoles(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [isUser]);
 //console.log("data:", roles )
  if (!isUser) return null;

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"List of Roles"} />
        <Grid container justify="center" className={classes.content}>
        {roles ? (
            <RolesTable data={roles} />
          ) : (
            "Loading....."
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ViewRoles;
