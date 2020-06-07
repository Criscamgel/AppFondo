import React from 'react';
import { Grid, Card, CardContent, Typography, makeStyles, Button, Box, FormControl, InputLabel, FormHelperText, OutlinedInput, TextField, Divider, Hidden } from '@material-ui/core';

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
      margin: '5% 0',
      ['@media (min-width:960px)']:{
        margin: '5% 5% 0 0'  
      }
    }
  });

const Tarea = ({tarea}) => {

    /* const cambiodeValor = (e, val) => {
        if(e.target.name){             
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
       })
       }else{
           
        guardarProyecto({
            ...proyecto,
            [val.campo] : val.nombre
        }) 
       }
    } */

    const classes = useStyles();

    return ( 
            
                <Card className={classes.customCard}>
                    <CardContent>
                    
                    <Typography variant="h5" component="h2">
                    {tarea.nombre}
                    </Typography>

                    <Typography
                        className={classes.title}
                        color="textSecondary">
                        {tarea.prioridad}
                    </Typography>

                    <Typography
                        className={classes.title}
                        color="textSecondary">
                        {tarea.responsable}
                    </Typography>

                    </CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                        </Grid>

                        <Grid item xs={6}>
                            <Box mx={2}>
                            <Button
                            fullWidth
                            variant="contained" 
                            color="primary"
                            >
                                Eliminar tarea
                            </Button>
                            <br /><br />
                            <Button
                            fullWidth
                            variant="contained" 
                            color="primary"
                            >
                                Editar tarea
                            </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
     );
}
 
export default Tarea;