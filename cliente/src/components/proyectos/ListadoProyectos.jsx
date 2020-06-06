import React from "react";
import { Grid, makeStyles, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    customCard: {
      margin: '5% 5% 0 0'
    }
  });

  const proyectos = [
    {
      nombre: 'Tienda Virtual',
      tipo: 'uno',
      correo: 'correo@correo.com'
    },
    {
      nombre: 'Tienda Virtual Dos',
      tipo: 'Dos',
      correo: 'correo@correo.com'
    },
    {
      nombre: 'Tienda Virtual tres',
      tipo: 'Tres',
      correo: 'correo@correo.com'
    },
    {
      nombre: 'Tienda Virtual Cuatro',
      tipo: 'Cuatro',
      correo: 'correo@correo.com'
    }
  ]

const ListadoProyectos = () => {
    const classes = useStyles();

  return (
    <>

      <Typography variant="h5" component="h2">
      Bienvenido! Usuario
      </Typography>

      <Grid container>
      { proyectos.map(proyecto => (

        <Grid item xs={12} md={4}>
                <Card className={classes.customCard}>
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                      {proyecto.nombre}
                      </Typography>

                      <Typography
                        className={classes.title}
                        color="textSecondary"         >
                        {proyecto.tipo}
                      </Typography>

                      <Typography
                        className={classes.correo}
                        color="textSecondary"
                        gutterBottom
                      >
                        {proyecto.nombre}
                      </Typography>


                    </CardContent>
                  <CardActions>
                    <Link to="/proyectos/proyecto">
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="small" 
                        fullWidth
                        >Ver proyecto
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
            </Grid>

              )) }
              </Grid>
      
    </>
  );
};

export default ListadoProyectos;
