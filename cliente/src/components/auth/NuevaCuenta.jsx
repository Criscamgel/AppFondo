import React, { useState } from 'react';
import { Grid, Box, FormControl, InputLabel, OutlinedInput, FormHelperText, Button, Avatar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const NuevaCuenta = () => {

    //State Para Iniciar Sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //Extraer de Usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {             
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Iniciar Sesión
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
                        <h2>Crear Cuenta <ControlPointIcon /></h2>
                        <form
                            onSubmit={onSubmit}
                        >
                        
                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="nombre">Nombres y apellidos</InputLabel>
                                <OutlinedInput 
                                    id="nombre"
                                    name='nombre'
                                    type="nombre"
                                    aria-describedby="nombre"
                                    label="Nombres y apellidos"
                                    value={nombre}
                                    onChange={onChange}
                                    />
                                <FormHelperText id="nombre">Escribe tu nombres y apellidos</FormHelperText>
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
                                    onChange={onChange}
                                    />
                                <FormHelperText id="email">Escribe tu correo electrónico</FormHelperText>
                            </FormControl>

                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <OutlinedInput 
                                    id="password"
                                    name="password"
                                    type="password"
                                    aria-describedby="password"
                                    label="Contraseña"
                                    value={password}
                                    onChange={onChange}
                                    />
                                <FormHelperText id="password">Escribe tu contraseña</FormHelperText>
                            </FormControl>                                
                            </Box>

                        </Grid>

                        <Grid item xs={12}>
                            <Box mb={2}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="confirmar">Confirmar contraseña</InputLabel>
                                <OutlinedInput 
                                    id="confirmar"
                                    name="confirmar"
                                    type="password"
                                    aria-describedby="confirmar"
                                    label="confirmar contraseña"
                                    value={confirmar}
                                    onChange={onChange}
                                    />
                                <FormHelperText id="confirmar">Confirma tu contraseña</FormHelperText>
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
                                >Registrarme</Button>
                                <Link 
                                    to={'/'}
                                    id="linkA"
                                    >
                                    <p>Volver a iniciar sesión</p>
                                </Link>
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
 
export default NuevaCuenta;