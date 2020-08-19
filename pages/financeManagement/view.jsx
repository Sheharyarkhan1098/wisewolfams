import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import PageTitle from "../../src/components/common/pageTitle";
import { create } from "../../http/httpCalls";
import { payment } from "../../http/apis";
import PaymentTable from "../../src/components/financeManagement/paymentTable";

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

const ViewPayment = () => {
  const classes = useStyles();
  const isUser = cookie.get("token");
  const router = useRouter();
  const getPaymentApi = payment.getOrgPaymentClientAdmin;
  const [payments, setPayments] = useState();
//   const data = {
//     "identity_no":"123123515"
// };

  useEffect(() => {
    if (!isUser) router.push("/auth");
    create(getPaymentApi)
      .then((res) => {
        setPayments(res.data);
      })
      .catch((err) => console.log(err));
  }, [isUser]);
  // console.log("payments", payments);
  if (!isUser) return null;
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.mainBox}>
        <PageTitle title={"List of Payments"} />
        <Grid container justify="center" className={classes.content}>
          {payments ? (
            <PaymentTable data={payments} />
          ) : (
            "Loading....."
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ViewPayment;
