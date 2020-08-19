import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import { getOrganizations } from "../../http/httpCalls";
import { superAdmin } from "../../http/apis";
import OrganizationTable from "../../src/components/organizationManagement/organizationTable";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    marginTop: 100,
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

const ViewOrganizations = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const getOrgApi = superAdmin.getOrganizations;
  const [organizations, setOrganizations] = useState();

  useEffect(() => {
    if (!isUser) router.push("/auth");
    getOrganizations(getOrgApi)
      .then((res) => {
        setOrganizations(res.data);
      })
      .catch((err) => console.log(err));
  }, [isUser]);

  if (!isUser) return null;
  console.log("data:", organizations);
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"List of Organizations"} />
        <Grid container justify="center" className={classes.content}>
          {organizations ? (
            <OrganizationTable data={organizations} />
          ) : (
            "Loading....."
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ViewOrganizations;
