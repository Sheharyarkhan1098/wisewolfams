import React, { useEffect } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import PageTitle from "../src/components/common/pageTitle";
import { Grid } from "@material-ui/core";
import SuperAdminDashboard from "../src/components/dashboard/superadmin/main";

export default function Index() {
  const isUser = cookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!isUser) router.push("/auth");
  }, [isUser]);

  if (!isUser) return null;

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container style={{ marginLeft: 305, marginTop: 100 }}>
        <SuperAdminDashboard />
      </Grid>
    </Grid>
  );
}
