import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles, Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import NewPaymentForm from "../../src/components/financeManagement/newPaymentForm";
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

const AddPayment = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const [response, setResponse] = useState({ res: false, error: false });

  useEffect(() => {
    if (!isUser) router.push("/auth");
  }, [isUser]);

  const handleResponse = (response) => {
    setResponse(response);
    setTimeout(() => {
      setResponse({ res: false, error: false });
    }, 3000);
  };

  if (!isUser) return null;

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Add Payment"} />
        {response.res && !response.error && (
          <Alert severity="success" className={classes.mb}>
            Payment created successfully!
          </Alert>
        )}
        {response.res && response.error && (
          <Alert severity="error" className={classes.mb}>
            Oops! An error occure while creating Payment
          </Alert>
        )}
        <Grid container className={classes.content}>
          <NewPaymentForm handleResponse={handleResponse} isEditRequest={false} data={null} />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AddPayment;
