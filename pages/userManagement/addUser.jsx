import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles, Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import NewUserForm from "../../src/components/userManagement/newUserForm";
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
  mb: {
    marginBottom: 20,
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const [response, setResponse] = useState({ res: false, error: false });
  const [password, setPassword] = useState(null);

  useEffect(() => {
    if (!isUser) router.push("/auth");
  }, [isUser]);

  const handleResponse = (response, userData) => {
    setResponse(response);
    setPassword(userData.password)
    setTimeout(() => {
      setResponse({ res: false, error: false });
      setPassword(null);
    }, 10000);
  };

  if (!isUser) return null;

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Add New User"} />
        {response.res && !response.error && password && (
          <>
          <Alert severity="success" className={classes.mb}>
            User created successfully!
          </Alert>
          <Alert severity="success" className={classes.mb}>  
            Use "{password}" as your password!
          </Alert>
          </>
        )}
        {response.res && response.error && (
          <Alert severity="error" className={classes.mb}>
            Oops! An error occure while creating user
          </Alert>
        )}
        <Grid container className={classes.content}>
          <NewUserForm handleResponse={handleResponse} />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AddUser;
