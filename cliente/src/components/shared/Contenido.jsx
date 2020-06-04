import React from 'react';
import NuevoProyecto from '../proyectos/contenido/NuevoProyecto';
import { Route, Switch } from 'react-router-dom';
import Inicio from '../proyectos/contenido/Inicio';

const Contenido = () => {
    return ( 
        <>
                
        <Switch>
            <Route exact path="/proyectos" component={Inicio} />
            <Route exact path="/proyectos/crear-proyecto" component={NuevoProyecto} />
        </Switch>
        </>
     );
}
 
export default Contenido;