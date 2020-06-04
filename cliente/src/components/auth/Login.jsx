import React, { useState } from 'react';
import { Grid, Box, FormHelperText, Button, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

const Login = () => {

    //State Para Iniciar Sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //Extraer de Usuario
    const { email, password } = usuario;

    const onChange = e => {             
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Iniciar Sesión
    const onSubmit = e => {
        e.preventDefault();
        
    }

    return ( 
        <>       

            <Grid container>
                <Grid item xs={1} sm={4}>                    
                </Grid>

                <Grid item xs={10} sm={4}>
                    <Grid container justify="center">
                        <Box textAlign="center" mt={15}>
                        <h2>FondoApp</h2>
                        <form
                            onSubmit={onSubmit}
                        >
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
                            <Box my={2}>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    type="submit" 
                                    startIcon={<ExitToAppIcon />} 
                                    fullWidth
                                >Iniciar Sesión</Button>
                                <Link 
                                    to={'/nueva-cuenta'}
                                    id="linkA"
                                    >
                                    <p>Crear Cuenta</p>
                                </Link>
                            </Box>
                        </Grid>
                        </form>
                        </Box>
                    </Grid>                    
                </Grid>

                <Grid item xs={1} sm={4}>                    
                </Grid>
                
            </Grid>            
        </>
     );
}

export default Login;