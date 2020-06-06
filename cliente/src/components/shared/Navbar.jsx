import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';

const drawerWidth = 240

const useStyles = makeStyles(tema => ({
    menuButton: {
        marginRight: tema.spacing(2),
        [tema.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    title:{
        /* Hace que ocupe todo el espacio */
        flexGrow: 1
    },
    appBar: {
        [tema.breakpoints.up('sm')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    }
}))


const Navbar = (props) => {

    const classes = useStyles()

    return ( 
        <>
            <AppBar 
                className={classes.appBar}
                position="fixed" 
                color="primary">
              <Toolbar>
                  <IconButton 
                  color="secondary" 
                  className={classes.menuButton}
                  onClick= {() => props.accionAbrir()}
                  >
                    <MenuIcon/>
                  </IconButton>
                <Typography
                    className={classes.title}
                    variant="h6">
                    <Link to="/proyectos">
                        Mis Proyectos
                    </Link>
                </Typography>
                <Button                     
                    variant="text" 
                    color="inherit">
                  <Link to='/'>Salir</Link>
                </Button>
              </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Navbar;