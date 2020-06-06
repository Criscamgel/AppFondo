import React from 'react';
import { makeStyles, Hidden} from '@material-ui/core';
import Navbar from '../shared/Navbar';
import Contenido from '../layout/Contenido';
import Cajon from '../shared/Cajon';

const estilos = makeStyles(tema => ({
    
    root: {
        display: 'flex'
    },
    toolbar: tema.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: tema.palette.background.default,
        padding: tema.spacing(3)
    }

}))


const Proyectos = () => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return ( 
        <>
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir}/>
            <Hidden xsDown>
                <Cajon
                    variant="permanent"
                    open={true} 
                />
            </Hidden>
            <Hidden smUp>
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir} 
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Contenido />
            </div>
        </div>                   
        </>
     );
}
 
export default Proyectos;