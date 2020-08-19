import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import Login from "../src/components/auth/login";
import Register from "../src/components/auth/register";
import { Grid } from "@material-ui/core";

const Auth = ({ handleToken }) => {
  const isUser = cookie.get("token");
  const router = useRouter();
  const [form, setForm] = useState("login");

  useEffect(() => {
    if (isUser) router.push("/");
  }, [isUser]);

  const handleForm = (form) => {
    setForm(form);
  };

  if (isUser) return null;

  return (
    <div>
      <Grid container alignItems="center">
        {form === "login" ? (
          <Login handleForm={handleForm} handleToken={handleToken} />
        ) : (
          <Register handleForm={handleForm} />
        )}
      </Grid>
    </div>
  );
};

export default Auth;
