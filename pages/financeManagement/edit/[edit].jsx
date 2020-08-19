import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles, Container, Grid } from "@material-ui/core";
import PageTitle from "../../../src/components/common/pageTitle";
import NewPaymentForm from "../../../src/components/financeManagement/newPaymentForm";
import Alert from "@material-ui/lab/Alert";
import { create } from "../../../http/httpCalls";
import { payment } from "../../../http/apis";

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

const EditPayment = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const  paymentType = router.query.payment;
  const { edit } = router.query;
  const getPaymentApi = payment.getUserInfo;
  const [payments, setPayments] = useState();
  const [response, setResponse] = useState({ res: false, error: false });
  const data = `{
    "identity_no":"${edit}"
}`;
  console.log(edit, paymentType)
  useEffect(() => {
    if (!isUser) router.push("/auth");
    create(getPaymentApi, data)
      .then((res) => {
        setPayments(res.data);
      })
      .catch((err) => console.log(err));
  }, [isUser]);
  
  const handleResponse = (response) => {
    setResponse(response);
    setTimeout(() => {
      setResponse({ res: false, error: false });
    }, 3000);
  };

  {payments && (
    console.log(payments.filter(p => p.paymentType === paymentType))
    )}
  if (!isUser) return null;

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"Update Payment"} />
        {response.res && !response.error && (
          <Alert severity="success" className={classes.mb}>
            Payment updated successfully!
          </Alert>
        )}
        {response.res && response.error && (
          <Alert severity="error" className={classes.mb}>
            Oops! An error occure while updating Payment
          </Alert>
        )}
        <Grid container className={classes.content}>
          {payments ? (
          <NewPaymentForm handleResponse={handleResponse} isEditRequest={true} data={payments[0]} />
          ): "loading..."}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default EditPayment;
