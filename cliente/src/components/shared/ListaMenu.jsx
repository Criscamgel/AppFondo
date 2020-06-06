import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import { Link } from 'react-router-dom';

const ListaMenu = () => {
    return ( 
        <>            
            <List component='nav'>

                <Link to='/proyectos'>
                    <ListItem button>
                        <ListItemIcon>
                            <VisibilityRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Ver mis proyectos' />
                    </ListItem>
                </Link>

                <Link to="/proyectos/crear-proyecto">
                    <ListItem button>
                        <ListItemIcon>
                            <ControlPointIcon />
                        </ListItemIcon>
                        <ListItemText primary='Crear proyecto' />
                    </ListItem>
                </Link>                

                <Divider />

                {/* <Oculto /> */}

            </List>
        </>
     );
}
 
export default ListaMenu;