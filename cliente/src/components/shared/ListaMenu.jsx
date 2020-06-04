import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Oculto from './Oculto';
import { Link } from 'react-router-dom';

const ListaMenu = () => {
    return ( 
        <>            
            <List component='nav'>
                <Link to="/proyectos/crear-proyecto">
                    <ListItem button>
                        <ListItemIcon>
                            <ControlPointIcon />
                        </ListItemIcon>
                        <ListItemText primary='Crear proyecto' />
                    </ListItem>
                </Link>

                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary='Texto Dos' />
                </ListItem>

                <Divider />

                <Oculto />

            </List>
        </>
     );
}
 
export default ListaMenu;