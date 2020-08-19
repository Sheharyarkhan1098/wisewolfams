import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Grid, Typography, Box } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles((theme) => ({
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: "100%",
    border: "2px solid #fafafa",
  },
  username: {
    fontSize: 30,
  },
  icon: {
    color: "#60b051 !important",
  },
  email: {
    color: "#1875d2",
    fontSize: 18,
  },
  info: {
    fontSize: 18,
    color: "#2b2a2a",
  },
  line: {
    height: "100%",
    width: 1,
    background: "#cecece",
  },
  present: {
    background: "#60b051",
    color: "#fff",
  },
  absent: {
    background: "#d92232",
    color: "#fff",
  },
  leaves: {
    background: "#f39c12",
    color: "#fff",
  },
  btnDelete: {
    background: "#d92232",
  },
  btn: {
    color: "#fff",
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item container sm={6}>
        <Grid item container alignItems="center">
          <Grid item container sm={4}>
            <img
              src="/images/user.png"
              alt="user"
              className={classes.userIcon}
            />
          </Grid>
          <Grid item container sm={8}>
            <Grid item container alignItems="center">
              <Grid item sm={2} xs={2}>
                <PersonIcon className={`${classes.username} ${classes.icon}`} />
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography variant="h6" className={classes.username}>
                  Taha Mudassir
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item sm={2} xs={2}>
                <PersonPinIcon className={`${classes.icon} ${classes.info}`} />
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography variant="body2" className={classes.info}>
                  Superadmin
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item sm={2} xs={2}>
                <PhoneIphoneIcon
                  className={`${classes.icon} ${classes.info}`}
                />
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography variant="body2" className={classes.info}>
                  03131122333
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item sm={2} xs={2}>
                <EmailIcon className={`${classes.icon} ${classes.info}`} />
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography variant="body2" className={classes.email}>
                  taha@wws.co
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          justify="center"
          style={{ marginTop: 20 }}
        >
          <Grid item>
            <Button variant="outlined" color="primary">
              Update
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={`${classes.btn} ${classes.btnDelete}`}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container sm={6}>
        <Grid item container sm={2}>
          <Box className={classes.line} />
        </Grid>
        <Grid item container sm={10}>
          <Grid item container>
            <Grid item container sm={9} xs={9}>
              <Typography variant="body1">Today's Attendance</Typography>
            </Grid>
            <Grid item container sm={3} xs={3}>
              <Chip label="Present" size="small" className={classes.present} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container sm={9} xs={9}>
              <Typography variant="body1">
                Total present in current month
              </Typography>
            </Grid>
            <Grid item container sm={3} xs={3}>
              <Chip label="20" size="small" className={classes.present} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item sm={9} xs={9}>
              <Typography variant="body1">
                Total absent in current month
              </Typography>
            </Grid>
            <Grid item sm={3} xs={3}>
              <Chip label="7" size="small" className={classes.absent} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container sm={9} xs={9}>
              <Typography variant="body1">
                Total leaves in current month
              </Typography>
            </Grid>
            <Grid item container sm={3} xs={3}>
              <Chip label="3" size="small" className={classes.leaves} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
