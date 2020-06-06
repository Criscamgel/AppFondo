import React, { useState } from 'react';
import { Grid, Box, FormHelperText, Button, FormControl, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const NuevoProyecto = () => {

    //Opciones
    const tiposProyectos = [
        { nombre: 'Uno', campo: 'tipo'},
        { nombre: 'Dos', campo: 'tipo' },
        { nombre: 'Tres', campo: 'tipo'}
    ]
    
     //State Para Iniciar Sesión
     const [proyecto, guardarProyecto] = useState({
        nombre: '',
        tipo: '',
        email: ''
    })

    //Extraer de Usuario
    const { nombre, email } = proyecto;

    
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
    
    return (
        <>
            <Grid container>
                <Grid item xs={1} sm={3}></Grid>

                <Grid item xs={10} sm={6}>
                    <Grid container justify="center">
                        <Box textAlign="center" mt={5}>
                        <h2>Crear Proyecto <ControlPointIcon /></h2>
                        <form
                            onSubmit={onSubmit}
                        >
                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="nombre">Nombre del proyecto</InputLabel>
                                <OutlinedInput 
                                    id="nombre"
                                    value={nombre}
                                    name='nombre'
                                    type="nombre"
                                    aria-describedby="nombre"
                                    label="Nombres del proyecto"
                                    onChange={cambiodeValor}
                                    />
                                <FormHelperText id="nombre">Escribe el nombre de tu proyecto</FormHelperText>
                            </FormControl>

                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box mb={2}>
                            <FormControl 
                            fullWidth>
                            <Autocomplete
                                    options={tiposProyectos}
                                    getOptionLabel={(option) => option.nombre}
                                    onChange={cambiodeValor}
                                    renderInput={(params) => <TextField {...params} 
                                    name="tipo" 
                                    label="Tipo de proyecto" 
                                    variant="outlined"
                                    />}
                                    />
                                <FormHelperText>Selecciona el tipo de proyecto</FormHelperText>
                            </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                                <OutlinedInput 
                                    id="email"
                                    name='email'
                                    type="email"
                                    aria-describedby="email"
                                    label="Correo electrónico"
                                    value={email}
                                    onChange={cambiodeValor}
                                    />
                                <FormHelperText id="email">Escribe tu correo electrónico</FormHelperText>
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
                                >Crear proyecto</Button>
                            </Box>

                        </Grid>

                        </form>
                        </Box>
                    </Grid>                    
                </Grid>

                <Grid item xs={1} sm={3}></Grid>
                
            </Grid>            

        </>
     );
}
 
export default NuevoProyecto;