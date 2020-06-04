import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core';
import ListaMenu from './ListaMenu';
import Logo from '../../assets/logo.png';

const drawerWidth = 240;

const estilos = makeStyles(tema => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: tema.mixins.toolbar,
    logo:{
        width: '90%',
        padding: '5%'
    }
}))

const Cajon = (props) => {

    const classes = estilos()

    return ( 
        <>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor= "left"
                variant={props.variant}
                open={props.open}
                onClose={props.onClose ? props.onClose : null }
            >
                <div className={classes.toolbar}>
                    <img className={classes.logo} src={Logo} />
                </div>

            <Divider />
            <ListaMenu />
            </Drawer>
        </>
     );
}
 
export default Cajon;