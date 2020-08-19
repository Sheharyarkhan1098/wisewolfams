import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "94%",
    height: 150,
  },
  cardHeading: {
    color: "#969696",
    fontSize: 15,
  },
  cardCount: {
    color: "#6c757d",
    marginTop: 10,
    marginBottom: 10,
  },
  textSuccess: {
    color: "#0acf97!important",
  },
  iconSuccess: {
    color: "#0acf97!important",
    fontSize: 25,
  },
  textDanger: {
    color: "#fa5c7c!important",
  },
  iconDanger: {
    color: "#fa5c7c!important",
    fontSize: 25,
  },
}));

const DasboardCard = ({ status, title }) => {
  const classes = useStyles();
  const statusData = status
    ? {
        text: classes.textSuccess,
        icon: <PublishIcon className={classes.iconSuccess} />,
      }
    : {
        text: classes.textDanger,
        icon: <GetAppIcon className={classes.iconDanger} />,
      };
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid conteiner>
          <Grid item container>
            <Typography className={classes.cardHeading} variant="body1">
              {title}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography className={classes.cardCount} variant="h3">
              43,221
            </Typography>
          </Grid>
          <Grid item container alignItems="center">
            <Grid item>{statusData.icon}</Grid>
            <Grid item>
              <Typography className={statusData.text} variant="body2">
                5.27%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DasboardCard;
