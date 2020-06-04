import React from "react";
import { Grid, Box, makeStyles, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Inicio = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box color="primary.contrastText" bgcolor="primary.main">
            Bienvenido!
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box border={2}>xs-12</Box>
        </Grid>
      </Grid>


      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Inicio;
