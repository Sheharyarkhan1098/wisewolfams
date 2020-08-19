import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import AddRoleForm from "../../src/components/roleManagement/addRole/addRoleForm";
import Alert from "@material-ui/lab/Alert";

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
}));

const AddRole = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const [response, setResponse] = useState({ res: false, error: false });

  useEffect(() => {
    if (!isUser) router.push("/auth");
  }, [isUser]);

  if (!isUser) return null;

  const handleResponse = (response) => {
    setResponse(response);
    setTimeout(() => {
      setResponse({ res: false, error: false });
    }, 3000);
  };
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Add New Role"} />
        {response.res && !response.error && (
          <Alert severity="success" className={classes.mb}>
            Role created successfully!
          </Alert>
        )}
        {response.res && response.error && (
          <Alert severity="error" className={classes.mb}>
            Oops! An error occure while creating Role
          </Alert>
        )}
        <Grid container className={classes.content}>
          <AddRoleForm handleResponse={handleResponse} />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AddRole;
