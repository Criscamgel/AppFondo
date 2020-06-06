import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, makeStyles, Button, Box, FormControl, InputLabel, FormHelperText, OutlinedInput, TextField, Divider, Hidden } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

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

  

  //Opciones
  const tiposTareas = [
    { nombre: 'Baja', campo: 'tipo'},
    { nombre: 'Media', campo: 'tipo' },
    { nombre: 'Alta', campo: 'tipo'}
]


  const proyectos = [
        {
        nombre: 'Tienda Virtual',
        tipo: 'uno',
        correo: 'correo@correo.com'
        }
    ]

  const tareas = [
      {     
        nombre: 'tarea 1',
        responsable: 'Lunes',  
        prioridad: 'Alta'
      },
      {     
        nombre: 'tarea 1',
        responsable: 'Lunes',  
        prioridad: 'Alta'
      },
      {     
        nombre: 'tarea 1',
        responsable: 'Lunes',  
        prioridad: 'Alta'
      },
      {     
        nombre: 'tarea 1',
        responsable: 'Lunes',  
        prioridad: 'Alta'
      }
  ]  


const Proyecto = () => {

    //State Para Iniciar Sesión
  const [proyecto, guardarProyecto] = useState({
    nombre: '',
    responsable: '',
    prioridad: ''
})

//Extraer de Usuario
const { nombre, responsable } = proyecto;


  const cambiodeValor = (e, val) => {
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
} 

const onSubmit = e => {
    e.preventDefault();

    //Validar que no hallan campos Vacios

    //Password minimo de 6 caracteres

    //Los 2 passwords Iguales

    //Pasarlo al action
}

    const classes = useStyles();

    return ( 
            <>            
                <Typography variant="h5" component="h2">
                {proyectos[0].nombre}
                </Typography>

                <Typography
                    className={classes.title}
                    color="textSecondary">
                    {proyectos[0].tipo}
                </Typography>
                <Divider /><br />
                <Grid container>
                        <Grid item xs={6} md={8}>
                        <Hidden mdUp>
                            <Box mr={1}>
                            <a href="#crearTarea">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="small" 
                                fullWidth>
                                    Crear tarea
                            </Button>
                            </a>
                            </Box>
                        </Hidden>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box ml={1}>
                            <Button 
                            variant="contained" 
                            color="primary" 
                            size="small" 
                            fullWidth>
                                Eliminar Proyecto
                            </Button>
                            </Box>
                        </Grid>
                </Grid>

                <Grid container>
                <Grid item xs={12} md={6}>
                    <Grid container>
                { tareas.map((tarea, key) => (
                        <Grid item xs={12}>
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
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>                        
                ))}
                </Grid>
                </Grid>

                <Grid id="crearTarea" item xs={12} md={6}>
                    <Grid container justify="center">
                        <Box textAlign="center" mt={5}>
                        <h2>Crear Tarea <ControlPointIcon /></h2>
                        <form
                            onSubmit={onSubmit}
                        >
                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="nombre">Nombre de la tarea</InputLabel>
                                <OutlinedInput 
                                    id="nombre"
                                    value={nombre}
                                    name='nombre'
                                    type="nombre"
                                    aria-describedby="nombre"
                                    label="Nombres y apellidos"
                                    onChange={cambiodeValor}
                                    />
                                <FormHelperText id="nombre">Escribe el nombre de la tarea</FormHelperText>
                            </FormControl>

                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box mb={2}>
                            <FormControl 
                            fullWidth>
                            <Autocomplete
                                    options={tiposTareas}
                                    getOptionLabel={(option) => option.nombre}
                                    onChange={cambiodeValor}
                                    renderInput={(params) => <TextField {...params} 
                                    name="prioridad" 
                                    label="Prioridad de la tarea" 
                                    variant="outlined"
                                    />}
                                    />
                                <FormHelperText>Selecciona la prioridad de la tarea</FormHelperText>
                            </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="responsable">Responsable de la tarea</InputLabel>
                                <OutlinedInput 
                                    id="responsable"
                                    name='responsable'
                                    type="text"
                                    aria-describedby="responsable"
                                    label="Correo electrónico"
                                    value={responsable}
                                    onChange={cambiodeValor}
                                    />
                                <FormHelperText id="responsable">Escribe el responsable de la tarea</FormHelperText>
                            </FormControl>

                            </Box>
                        </Grid>                        

                        <Grid item xs={12}>

                            <Box my={2}>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    type="submit" 
                                    startIcon={<ExitToAppIcon />} 
                                    fullWidth
                                >Crear Tarea</Button>
                            </Box>

                        </Grid>

                        </form>
                        </Box>
                    </Grid>                    
                </Grid>    

            </Grid>
        </>
     );
}
 
export default Proyecto;